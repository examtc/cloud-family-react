/* 引入： import
 使用： 
    <InputPanel 
        //点击"发送"调用的函数
        callBack=yourCallBack
    ></InputPanel>       
*/
import React,{ Component} from 'react'
import InputPanelUI from './InputPanelUI'
import { StyleInputContainer } from './StyleInputContainer'

import RedPacket from '../../../pages/redPacket/RedPacketContainer'

import BScroll from 'better-scroll'


class InputPanel extends Component {
    constructor(props) {
        super (props)
        this.state={
            showButton: false,
            clientHeight: 0,
            inputMessageText: '',
            isShowBottomPanel: false,
            inputOther:[],
            isNoTraces: false,
            redPacket: false
        }
        this.changeBottomState = this.changeBottomState.bind(this)
        this.clickItem = this.clickItem.bind(this)
        this.handleClickAB = this.handleClickAB.bind(this)
        this.handleClickLocal = this.handleClickLocal.bind(this)
    }
    componentDidMount () {
        //定义按钮数据
        this.normalList= [
            {
                id: "0001",
                name: "photo",
                itemImgUrl: "../images/inputPanel/message_messageLog_0010.png",
                itemName: "照片"
            },
            {
                id:"0002",
                name: "noTraces",
                itemImgUrl: "../images/inputPanel/message_messageLog_0011.png",
                itemName: "无痕消息"
            },
            {
                id:"0003",
                name: "redRacket",
                itemImgUrl: "../images/inputPanel/message_messageLog_0012.png",
                itemName: "红包"
            },
            {
                id:"0004",
                name: "position",
                itemImgUrl: "../images/inputPanel/message_messageLog_0013.png",
                itemName: "定位"
            }
        ]
        this.noTracesList=[
            {
                id:"0002",
                name: "noTraces",
                itemImgUrl: "../images/inputPanel/message_messageLog_0011.png",
                itemName: "无痕消息"
            },
            {
                id:"0005",
                name: "exitTraces",
                itemImgUrl: "../images/inputPanel/message_messageLog_0011-1.png",
                itemName: "退出无痕"
            },
        ]
        this.setState({
            inputOther: this.normalList
        })

        this.bscroll = new BScroll( "#log-bscroll",{
            scrollY: true,
            click: true 
        })
        //监听窗口高度
        let pageHeight = document.documentElement.clientHeight || document.body.Height 
        this.setState({
            clientHeight: pageHeight
        })
        //绑定窗口大小监听事件
        window.addEventListener("resize", this.resize)
    }
    resize = ()=>{
        let NewHeight = document.documentElement.clientHeight || document.body.Height 
        if(this.state.clientHeight > NewHeight){
           this.setState({
                showButton: true
           })
        } else {
            this.setState({
                showButton: false
            })
        }
    }
    //数据绑定数据
    inputMessageEvent = (newText)=>{
        this.setState({
            inputMessageText: newText
        })
    }
    //调用父类回调
    callBackEvent=()=>{
        if(this.state.inputMessageText === ''){
            return 
        } else {
            this.props.callBack(this.state.inputMessageText)
            this.setState({
                inputMessageText:''
            })
        }
    }
    //回车事件
    callEnterEvent=(e)=>{
        if(e.keyCode === 13){
            this.callBackEvent()
        }
    }
    //调出bottomPanel
    changeBottomState() {
        this.setState({
            isShowBottomPanel: !this.state.isShowBottomPanel
        })
    }
    //图标点击事件     
    clickItem(ItemName) {  
        //点击事件函数
        const otherItemClick = {
            //图片发送
            "photo":()=>{
                this.handleClickAB()
            } ,
            //无痕信息
            "noTraces": ()=>{
                this.setState({
                    inputOther: this.noTracesList,
                    isNoTraces: true
                })
                this.props.noTracesStateEvent(true)                          
            },
            "redRacket": ()=>{
                this.setState({
                    redPacket: true
                })
                setTimeout(() => {
                    this.setState({
                        redPacket: false
                    })
                }, 0);
                this.props.handleMessageSend({
                    messageItemType: "redRacket",
                    messageItemInfo: "测试红包"
                })

            },
            "position": async ()=>{
                this.handleClickLocal()                        
            },
            //退出无痕
            "exitTraces": ()=>{
                this.setState({
                    inputOther: this.normalList,
                    isNoTraces: false
                })
                this.props.noTracesStateEvent(false)
            }
        }
        otherItemClick[ItemName]()   
    }
    //相册
    handleClickAB = () => {
        let that =  this
        window.wx.chooseImage({
        count: 9, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
            success:  (res1)=> {
            // // alert(res1)
                res1.localIds.map((value)=>{
                    window.wx.getLocalImgData({
                        localId: value, // 图片的localID
                        success: function (res) {
                            var localData = res.localData;                             
                            //调用函数发送消息
                            that.props.handleMessageSend({
                                messageItemType: "photo",
                                messageItemInfo: ["data:image/png;base64,"+localData]
                            })
                        }                        
                    })
                })            
            }
        })
    }
    //相机
    handleClickCA = () => {
        window.wx.chooseImage({
            count: 9, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            }
          })
    }      

    // 获取地理位置
    handleClickLocal = ()=> {
        var localInfo = ''
        let that = this

        window.wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                var speed = res.speed; // 速度，以米/每秒计
                var accuracy = res.accuracy; // 位置精度
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片                   
                fetch(`api/reverse_geocoding/v3/?ak=wRKhoixq4i6wAXGN2A0fx74bmyfGGV0p&output=json&coordtype=wgs84ll&location=${latitude},${longitude}`)
                    .then((response) => {
                        return response.json()
                    })
                    .then((result) => {
                        localInfo = JSON.stringify(result.result.formatted_address)
                        that.props.handleMessageSend({
                            messageItemType: "position",
                            messageItemInfo: localInfo
                        }) 
                    }
                )
            }
        })
        return localInfo
    } 


    componentWillUnmount () {
        window.removeEventListener("resize", this.resize)
    }

   
    render() {
        return (
            <StyleInputContainer>                
                <InputPanelUI 
                    // //调用相机
                    // handleClickCA={this.handleClickCA}
                    // //调用相册
                    // handleClickAB={this.handleClickAB}
                    //相关属性状态
                    {...this.state}
                    clickItem = {this.clickItem}
                    //显示“发送按钮”
                    showButton = {this.state.showButton}
                    //input数据绑定
                    inputMessageText = {this.state.inputMessageText}
                    inputMessageEvent = {this.inputMessageEvent}
                    //发送按钮点击回调事件
                    callBack = {this.callBackEvent}
                    callEnterEvent={this.callEnterEvent}
                    // bottomPanel的调出
                    showBottomPanel = {this.changeBottomState}
                ></InputPanelUI>
                <RedPacket 
                    {...this.state}
                    {...this.props}
                    type={
                            this.props.messageType === "group"
                            ? "People"
                            : "Person"
                        }
                    ></RedPacket>
            </StyleInputContainer>
        )
    }
}
export default InputPanel
