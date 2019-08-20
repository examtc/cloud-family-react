import React,{Component} from 'react'
import MessageLogUI from './MessageLogUI'
import {myFetch} from 'util/http/fetch'

import {Toast } from 'antd-mobile'
class MessageLog extends Component {
    constructor(props) {
        super(props)
        this.state={
            currentID: 1,
            MessageLogList: [],
            isNoTracesState: false,
            NoTracesMessage: '',
            NoTracesMessageState: '',
            currentMessage:'' ,
            messageUserInfo:{} ,
            fromId: "",
            //个人过群组
            messageType: "",
            messageId: "" ,
            // 消息的类型
            messageItemType: 'normal',
            messageItemInfo: ""
        }

        this.checkoutNoTraces = this.checkoutNoTraces.bind(this)
        this.changeNoTracesState = this.changeNoTracesState.bind(this) 
        this.noTracesToEmpty = this.noTracesToEmpty.bind(this)
        this.toBackPage = this.toBackPage.bind(this)
        this.headerAddOption = this.headerAddOption.bind(this)
        this.connectionWebSocket = this.connectionWebSocket.bind(this)
        this.upDataMessageList = this.upDataMessageList.bind(this)
        this.sendMsg = this.sendMsg.bind(this)
        this.handleMessageSend = this.handleMessageSend.bind(this)
    }
    async componentDidMount(){
        let userInfo = JSON.parse(window.localStorage.userInfo)
        //后期在登录后获取
        this.userId = userInfo.uuid
        this.noTracesMessageList = []
        let data = this.props.location.state.messageUserInfo
        console.log("该页面ID为："+ this.props.location.state.id,
                    "聊天对象是" ,this.props.location.state.messageUserInfo,
                    "跳转来页面为 "+ this.props.location.state.currentPage,
                    "消息的类型为" + this.props.location.state.messageType
                    )          
        let result =''
        var url = ''       
        if( data.messageId == 1004 ){
            url = 'https://api.myjson.com/bins/pzcsd'           
        } else if( data.messageId == 1005){
            url = 'https://api.myjson.com/bins/1cxdo5'       
       } else if(data.messageId == 10001){
            url = "https://api.myjson.com/bins/1gy2rx"
       }

        if(this.props.location.state.messageTitle === "系统消息"){
            //测试无数据
            result = [{
                "messageID": "123",
                "messageFromId": 1000,
                "message": "normal_尊敬的用户，感谢您对云之家的信任与支持！当前团队短信余额不足，为了避免您的服务受限，请升级至云之家协同云基础版或旗舰版，可使用云之家手机端进入我的工作台-管理员专区-流量礼包领取流量产品，如需帮助请拨打云之家客服热线400-123-1234。",
                "sendTime": "2019-07-30 12:30:21",
                "state": "read",
                "type": "normal"
              }
            ]
        } else{
            if( window.localStorage["messageLog"+ data.messageId] ) {
                result = JSON.parse(window.localStorage["messageLog"+ data.messageId])
            } else {
                Toast.loading("请稍后...", 0, null, false,true)
                result = await myFetch(url)                
                Toast.hide()
            }
        }               
        this.setState({
            currentID:  userInfo.uuid,
            MessageLogList: result,
            messageUserInfo: this.props.location.state.messageUserInfo,
             // 连接ID   
            fromId : data.messageFromId,
            messageType:  data.messageType,
            messageId: data.messageId
        }) 
        //无痕消息 列表
        this.noTracesMessageList = this.AddNoTracesMessageList(result)
        //webStocket 连接
        this.connectionWebSocket(this.userId)
        let userId = 1
        this.connectionWebSocket(userId)
    }
    AddNoTracesMessageList(list) {
        return list.filter(value => {
           return value.type==="noTraces"    
        });
    }

     //测试webStock--连接
     connectionWebSocket(userId){
        if("WebSocket" in window){//支持websocket
            var  url  = "ws://39.106.73.167/websocket/"+ userId;
            this.websocket = new WebSocket(url);//"/websocket/{name}"     
        }else{
            alert('当前浏览器不支持WebSocket');
        }

        //回调方法
        this.websocket.onmessage=(event)=>{
            var data = event.data;
            this.upDataMessageList(data);
        }

        this.websocket.onerror=()=>{
            this.setMsg("websocket连接异常");
        }
        this.websocket.onclose=()=>{
            this.setMsg("websocket关闭");
        }
        this.websocket.onopen=()=>{
            this.setMsg("websocket已连接");
        }
    }

    //打印一下消息
    setMsg(data){
        console.log("messageLogContainer =="+data)
    }

    //收到消息显示
    upDataMessageList(data){
        let {from,to,message} = JSON.parse(data)
        let type = message.split('_')[0]
        let state = ""
        let messageID = new Date().getTime() + Math.random()
        if(this.state.messageType === 'group'){
            //过滤掉来自 自身的消息
            if(to == this.state.messageId&&from !== this.state.currentID){
                if(type=="noTraces"){
                    state = "unread"
                } 
                let newMessage= {
                    messageID,
                    messageFromId:from,
                    message,
                    sendTime: new Date().toString,
                    type,
                    state
                }
                
                if(type=="noTraces"){
                    this.noTracesMessageList.push(newMessage)
                }
        
                let newMessageLogList = this.state.MessageLogList
                newMessageLogList.push(newMessage)
                this.setState({
                    MessageLogList: newMessageLogList
                })
            } 
        } else if(this.state.messageType === 'person'){
            //过滤消息池中的无关消息
            if(from == this.state.fromId && to == this.state.currentID){
                if(type=="noTraces"){
                    state = "unread"
                } 
                let newMessage= {
                    messageID,
                    messageFromId:from,
                    message,
                    sendTime: new Date().toString,
                    type,
                    state
                }
        
                if(type=="noTraces"){
                    this.noTracesMessageList.push(newMessage)
                }
        
                let newMessageLogList = this.state.MessageLogList
                newMessageLogList.push(newMessage)
                this.setState({
                    MessageLogList: newMessageLogList
                })
            } 
        }
    }

    //发送消息 json
     sendMsg(value){
        //得到接消息的用户名 和  内容
        var me = this.userId
        //测试
        var toName = ''
        if(this.state.messageType==="person"){
            toName = this.state.fromId
        } else {
            toName = this.state.messageId
        }
        var content = value
        var webSocketType = ''
        if(this.state.messageType === 'group'){
            webSocketType=1
        } else {
            webSocketType=0
        }
        if (this.websocket!=null){
            var json = '{"from":'+me+',"to":'+toName+',"type":'+webSocketType+',"message":"'+content.trim()+'"}';
            this.websocket.send(json);
        }else{
            alert("请先链接websocket");
        }
    }

    //设置发送信息的类型
    async handleMessageSend(option){
        await this.setState({
            messageItemType: option.messageItemType,
            messageItemInfo: option.messageItemInfo
        })    
        this.send(option.messageItemInfo)
    }


    //发送按钮
    send =(msgValue)=> {
        var newMessage = {}
        //指定消息类型
        var messageID = new Date().getTime() + Math.random()
        var messageValue=''
        var messageItemType = ''
        if(this.state.messageItemType == "photo") {
            var valueList = []    
            this.state.messageItemInfo.forEach(value => {
                newMessage = {
                    messageID,
                    messageFromId: this.state.currentID,
                    message: "photo_"+ value,
                    sendTime: new Date().toString,
                    state: "read",
                    type: "photo"
                }
                valueList.push(newMessage)
            });
            this.sendMsg(newMessage.message) 
            let newMessageLogList = this.state.MessageLogList
            newMessageLogList.push(...valueList)
            this.setState({
                MessageLogList: newMessageLogList
            })
        } else{            
            if(this.state.isNoTracesState) {
                //处理无痕数据
                newMessage= {
                    messageID,
                    messageFromId: this.state.currentID,
                    message:  "noTraces_"+msgValue,
                    sendTime: new Date().toString,
                    type: "noTraces",
                    state: "unread"
                } 
                this.noTracesMessageList.push(newMessage)
                messageValue = "noTraces_" + msgValue
                messageItemType = "noTraces"   
            } else if(this.state.messageItemType == "redRacket") {
                messageValue = "redRacket_"+this.state.messageItemInfo
                messageItemType = "redRacket"
            } else if(this.state.messageItemType == "position") { 
                messageValue = "position_"+this.state.messageItemInfo
                messageItemType = "position"
             }else { 
                messageValue = "normal_"+ msgValue
                messageItemType = "normal"                             
            } 
            newMessage = {
                messageID,
                messageFromId: this.state.currentID,
                message: messageValue,
                sendTime: new Date().toString,
                state: "read",
                type: messageItemType
              }   
            this.sendMsg(newMessage.message) 
            let newMessageLogList = this.state.MessageLogList
            newMessageLogList.push(newMessage)
            this.setState({
                MessageLogList: newMessageLogList
            })
        }  
        this.setState({
            messageItemType: "normal",
            messageItemInfo: ''
        })
    }
    //表头“+”号
    headerAddOption() {

        if(this.props.location.state.messageType === "group") {
            let path = {
                pathname: "/groupDetails",
                state:{
                    messageId: this.props.location.state.id,
                    messageType: this.props.location.state.messageType 
                }
            }
            this.props.history.push(path)
        }
    }
    //退回原消息界面
    toBackPage() {
        let path= {
            pathname: '/',
            state:{
                currentPage: this.props.location.state.currentPage
            }
        }
        this.props.history.push(path)
    }
    //改变无痕状态
    async changeNoTracesState(State) {
        await this.setState({
            isNoTracesState: State
        })       
       
    }
    //无痕消息置空
    noTracesToEmpty() {
        this.setState({
            NoTracesMessage: '',
            NoTracesMessageState: 'unable'
        })

    }
    //无痕消息处理
    checkoutNoTraces(num) {  
        let value = this.noTracesMessageList.find((value)=>(value.messageID===num))
        this.setState({
            NoTracesMessage: value.message.split('_')[1],
            NoTracesMessageState: value.state 
        })     
        setTimeout(()=>{
            this.noTracesToEmpty()
            let tempList = this.state.MessageLogList
            tempList.forEach((value)=>{
                if(value.messageID === num){
                    value.state = "unable"
                }
            })
            this.setState({
                MessageLogList: tempList                
            })
        },5000)
    }
    componentWillUnmount() {    
        if(this.state.MessageLogList){
            let uuid = this.props.location.state.messageUserInfo.messageId            
            window.localStorage["messageLog"+ uuid ] = JSON.stringify(this.state.MessageLogList)
        }
    }
    render() {
        return (
            <MessageLogUI 
                {...this.state}
                currentPage={this.props.location.state.currentPage}
                messageType={this.props.location.state.messageType}
                messageTitle={this.props.location.state.messageTitle}
                MessageLog={this.state.MessageLogList}
                send={this.send}
                toBackPage={this.toBackPage}
                headerAddOption={this.headerAddOption}
                changeNoTracesState={this.changeNoTracesState}
                noTracesToEmpty = {this.noTracesToEmpty}
                checkoutNoTraces={this.checkoutNoTraces}
                handleMessageSend={this.handleMessageSend}
            ></MessageLogUI>
        )
    }
}
export default MessageLog