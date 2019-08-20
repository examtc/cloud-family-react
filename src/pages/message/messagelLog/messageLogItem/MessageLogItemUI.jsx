import React,{ Component} from 'react'
import {StyleMessageLogItem} from './StyleMessageLogItem'
class MessageLogItemUI extends Component {  
    constructor(props){
        super(props)
        this.messageContent = this.messageContent.bind(this)
    }
    messageContent(type){
        let messageMethod = {
            "photo": ()=> (
                <div className="photo">
                    <img src={this.props.value.message.split('_')[1]} alt=""/>
                </div>
            ),
            "noTraces": ()=>(
                <div 
                    className="noTracesMessage"
                    onClick = {()=>{
                        this.props.checkoutNoTraces(this.props.value.messageID)
                    }}
                    > 
                    <img src="../images/inputPanel/message_messageLog_0011-2.png" alt=""/>
                </div>
            ),
            "redRacket": ()=>(
                <div className= "redRacket" >
                    <span>红包消息:{this.props.value.message.split('_')[1]}</span>
                </div>
            ),
            "position": ()=>(
                <div className="position">
                    <span>当前位置为:{this.props.value.message.split('_')[1]}</span>
                </div>
            ),
            "normal": ()=>(
                <div className="messge-text">
                    {this.props.value.message.split('_')[1]}
                </div> 
            )
        }
        return messageMethod[type]()
    }
    render() {
        return (
            <StyleMessageLogItem
                className={this.props.styleName}
            >
                <div className="message-icon-wrap">
                    <div className="message-icon" >
                        <img className="icon-inner"
                            // src={this.props.imgUrl}
                            src={this.props.userInfo.userIcon} 
                            alt=""/>
                    </div>
                </div>
                <div className="content-main">
                    {                            
                        this.messageContent(this.props.value.type)                  
                    }
                    <div className="unreadstyle">
                        <span>
                            {
                                this.props.state === "unread"
                                ? "对方未读"
                                :''
                            }
                        </span>      
                        {
                            this.props.value.state === "unable"
                            && (
                            <span className="redcolor">                                             
                                    已失效    
                            </span>
                            )
                        }                      
                    </div>
                </div>
            </StyleMessageLogItem>
        )
    }
}
export default MessageLogItemUI