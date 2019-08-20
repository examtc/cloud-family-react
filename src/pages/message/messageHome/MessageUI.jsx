import React,{ Component } from 'react'

import { StyleMessageUI} from './StyleMessage'
import TopHeader from 'components/topHeader/index.jsx'
import MoreChoose  from './moreChoose/MoreChooseContainer'
import MessageList from './messageList/MessageListContainer'
class MessageUI extends Component {    
    render() {
        return ( 
            <StyleMessageUI>
                <TopHeader
                    left={this.props.showBackIcon}
                    leftEle={ 
                        this.props.showBackIcon
                        && (
                            <div 
                                className="leftDiv"
                                onClick={()=>{this.props.updateList("toAllMessage")}}
                            >                            
                            </div>
                        )
                    }
                    rightEle={""}
                    title={this.props.title}
                    rightEle={
                        <span id="addEvent">
                            <img src="./images/message/message_0031.png" alt=""  height="17px"/>
                        </span>
                    }
                    rightEvent={this.props.clickChoose}
                >
                </TopHeader>
                {
                    this.props.isShow 
                    && (  <MoreChoose {...this.props}></MoreChoose> )
                                     
                }
                <MessageList 
                    {...this.props}
                ></MessageList>
            </StyleMessageUI>
        )
    }
}
export default MessageUI