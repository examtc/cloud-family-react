import React,{ Component } from 'react'
import {withRouter} from 'react-router-dom'
import MessageUI from './MessageUI'
import {myFetch} from 'util/http/fetch'
import {Toast } from 'antd-mobile'


class MessageContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            isShow: false,
            title: '',
            titleOption: 'toAllMessage',
            messageList:[],
            showBackIcon: false,
            currentID: 0
        }
        this.clickChoose = this.clickChoose.bind(this)
        this.updateList = this.updateList.bind(this)      
        
    }

    async componentDidMount()  {
        this.getLoginUserID()
        //请求列表数据
        let option = this.props.location.state && this.props.location.state.currentPage
        if(option){
            this.updateList(option)
        } else {
            Toast.loading("请稍后...", 0, null, false,true)            
            this.result = await myFetch(this.url) 
            await this.setState({
                title: "消息",
                messageList: this.result
            })
            Toast.hide()
        }
        //右上点击事件监听
        this.headerEvent=document.addEventListener("touchstart",(e)=>{
            let target = document.querySelector("#addEvent")
            //点透事件
            this.timerTimeout = setTimeout(()=>{
                if(e.target !== target) {
                    if(e.target.parentNode !== target){
                        if(this.state.isShow){
                            this.setState({
                                isShow: false
                            })
                        }
                    }
                }
            },200)
        })
       
    }
    //获取登录的用户信息
    getLoginUserID() {
        let userInfo
        if(window.localStorage.userInfo){
            userInfo = JSON.parse(window.localStorage.userInfo) 
        } else {
            userInfo = {
                uuid: 0
            }
        }
        this.setState({
            currentID: userInfo.uuid
        })
        switch (userInfo.uuid){
            case 1:
                this.url = "https://api.myjson.com/bins/s90or"
                break
            case 2:
                this.url = "https://api.myjson.com/bins/g9dc3"
                break
            case 3: 
                this.url = 'https://api.myjson.com/bins/u0her'
                break
            default:
                this.url = 'https://api.myjson.com/bins/v7kc3'
        }
    }
   
    //展示更多操作菜单
    clickChoose() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    //更改表头标题/列表信息
    updateList( option) {
        // 根据option设置showBackIcon
        if(option === "toAllMessage"){
            this.setState({
                showBackIcon: false
            })
        } else {
            this.setState({
                showBackIcon: true
            })
        }

        let uuid = JSON.parse(window.localStorage.userInfo).uuid 
        //定义各个选项的事件
        let updateList={
            "toAllMessage": async ()=>{
                Toast.loading("请稍后...", 0, null, false)
                if(uuid){
                    if(window.localStorage["messageList"+uuid]){
                        this.result1 = JSON.parse(window.localStorage["messageList"+uuid])   
                        console.log("local", this.result1)                  
                    } else {
                        this.result1 = await myFetch(this.url)                    
                    }
                    await this.setState({
                        title: "消息",
                        titleOption:  "toAllMessage",
                        messageList: this.result1
                    })
                }
                Toast.hide()
            },
            "workReport": async ()=>{
                //工作汇报             
                this.props.history.push('./workReport')
            },
            "unReadMessage": async ()=>{
                //请求未读信息
                this.result = await myFetch(this.url) 
                this.setState({
                    title: "未读消息",
                    titleOption:  "unReadMessage",
                    messageList: this.result.filter(value=>{
                        return value.unRead > 0
                    })
                })
            },
            "linkMan": async ()=>{
                //联系人请求
                this.props.history.push("./contacts")              
            },
            "talkGroup": async ()=>{
                //群组数据https://api.myjson.com/bins/8k7pn
                if(uuid){
                    if(window.localStorage["messageGroupList"+uuid]){
                        this.result =JSON.parse(window.localStorage["messageGroupList"+uuid])
                    } else {                          
                        this.result = await myFetch('https://api.myjson.com/bins/8k7pn') 
                        window.localStorage["messageGroupList"+uuid]= JSON.stringify(this.result)
                    }
                } else{
                    this.result = ''
                }
                this.setState({
                    title: "重要群组",
                    titleOption: "talkGroup",
                    messageList: this.result
                })
            }
        }
        //调用事件
        updateList[option]()
    }
    
    componentWillUnmount() {    
        if(this.state.messageList){
            window.localStorage["messageList"+ this.state.currentID] = JSON.stringify(this.state.messageList)   
        }
        // 卸载异步操作设置状态
        clearTimeout(this.timeouter)
        this.setState = (state, callback) => {
            return
        }
    }  
    render() {
        return (
            <>
                <MessageUI 
                    clickChoose={this.clickChoose} 
                    updateList = {this.updateList}
                    {...this.state}
                ></MessageUI>
                
            </>
        )
    }
}

export default withRouter(MessageContainer)