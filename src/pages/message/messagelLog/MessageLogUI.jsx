import React,{ Component} from 'react'
import {withRouter} from 'react-router-dom'


import {StyleMessageLog} from './StyleMessageLog'
import TopHeader from 'components/topHeader/index'
import IconHeader from  './iconHeaderComponent/index'
import MessageLogItem from './messageLogItem/MessageLogItemContainer'
import InputPanel from 'components/inputPanel/index.js'
import NoTracesMessage from './noTracesMessage/NoTracesMessageContainer'
class MessageLogUI extends Component {
    constructor(props) {
        super(props)
        this.state={
            currentId:"111"
        }
        this.noTracesNum = 0
    }
    render() {   
        return (
            <StyleMessageLog>
                
                <TopHeader
                    left={true}
                    leftEle={
                        <div 
                            className="leftDiv"
                            onClick={()=>{this.props.toBackPage()}}
                        >
                        {

                        this.props.messageTitle === "系统消息" 
                        ? <IconHeader                         
                            iconName={this.props.messageTitle}                       
                        >                            
                        </IconHeader>
                        : (
                            this.props.messageType !== 'group' && 
                        <IconHeader
                            imgUrl={this.props.messageUserInfo.messageIcon}
                            iconName={this.props.messageTitle}                       
                        >                            
                        </IconHeader> 
                        )                         
                        } 
                        </div>
                    }
                    title={
                        this.props.messageType === 'group' && 
                        this.props.messageTitle
                    }
                    rightEle={
                        <span id="addEvent">
                            <img src="../images/message/message_0031.png" alt=""  height="17px"/>
                        </span>
                    }
                    rightEvent={this.props.headerAddOption}
                >
                </TopHeader>
                <div className="log-main" id="log-bscroll">
                    <div className="log-main-wrap">
                        {
                            this.props.MessageLog.length > 0
                            ? <div className="timeTilt">{this.props.MessageLog.length > 0 && "07-23 13:23"}</div>
                            : ''
                        }
                        {
                            this.props.MessageLog.length > 0
                                ? this.props.MessageLog.map(value=>{
                                    return (
                                        <MessageLogItem
                                            styleName={
                                                (this.props.currentID === value.messageFromId)
                                                ? ""
                                                : "onleft"
                                            }                                            
                                            {...this.props}
                                            key={value.messageID}
                                            value={value}
                                            sendTime={value.sendTime}
                                            state={value.state}
                                            type={value.type}
                                            isSender={this.props.currentID === value.messageFromId}
                                        ></MessageLogItem>
                                    )
                                })
                                : (<div className="messageempty">
                                    "还未有消息，开始聊天吧"
                                </div>)
                                    
                        }                    
                    </div>
                </div>
                <InputPanel 
                    //传递图片的src
                    handleMessageSend={this.props.handleMessageSend}
                    //无痕事件
                    noTracesStateEvent={this.props.changeNoTracesState}
                    //发送事件
                    callBack={this.props.send}
                    //传递当前页面的值
                    messageType={this.props.messageType}
                ></InputPanel>
                {
                    (
                        this.props.NoTracesMessage 
                        && this.props.NoTracesMessageState === 'unread' 
                    ) 
                    &&
                    (
                    <NoTracesMessage
                        noTracesToEmpty = {this.props.noTracesToEmpty}
                        NoTracesMessage={this.props.NoTracesMessage}
                    ></NoTracesMessage>
                    )
                }
            </StyleMessageLog>
            
        )
    }
}
export default withRouter(MessageLogUI)