import React,{ Component} from 'react'
import {withRouter} from 'react-router-dom'
import MessageLogItemUI from './MessageLogItemUI'
import { userInfo } from 'os';
class MessageLogItem extends Component {

    constructor(props){
        super(props)
        this.state={
            //数据库中获取
            imgUrl: "../images/message/message_0015.png",
            currentPage: '',
            userMessageList:[],
            messageUserInfo:[],
            userInfo:{}  ,
            messageItemType: 'normal'                 
        }
        this.checkoutNoTraces = this.checkoutNoTraces.bind(this)
    }
    componentDidMount() {
        this.setState({
            messageItemType:this.props.value.type,
            currentPage: this.props.currentPage
            // userMessageList: this.props.messageUserInfo
        })
        let Info = ''
        if(this.props.messageUserInfo.messageType==="group" ||this.props.messageUserInfo.messageType === "person"){
            Info = this.props.messageUserInfo.groupNumber.filter((value)=>{
                return value.userId == this.props.value.messageFromId
            })
            this.userInfo = Info[0] 
        } else {      
            if(this.props.isSender){
                Info = this.props.messageUserInfo.groupNumber.filter((value)=>{
                    return value.userId == this.props.currentID
                })
                this.userInfo = Info[0] 
            } else{     
            Info = {
                userIcon:"../images/message/message_0013.png",
            }
            this.userInfo = Info
            }
        }
        this.setState({
            messageUserInfo: this.props.messageUserInfo,
            userInfo: this.userInfo 
        })       
    }

    //长按事件监听
    longTouch(){

    }
    //查看无痕消息
    checkoutNoTraces(num){
        this.props.checkoutNoTraces(num)
    }    
    render() {
        return (
            <MessageLogItemUI
                {...this.props}
                {...this.state}
                quitOption={this.quitOption}
                iconUrl={this.state.userInfo}            
                checkoutNoTraces = {this.checkoutNoTraces}
            ></MessageLogItemUI>
        )
    }
}
export default withRouter(MessageLogItem)