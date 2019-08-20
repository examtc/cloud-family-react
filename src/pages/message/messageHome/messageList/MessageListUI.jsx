import React,{ Component } from 'react'
import MessageItem from './messageListItem/MessageItemContainer'

import {StyleMessageList} from './StyleMessageList'
class MessageListUI extends Component {
    render() {
        return (
                 <StyleMessageList id="bscrollwrap" >
                     <ul>                         
                        {
                            this.props.messageList.length>0
                            ? this.props.messageList.map((value,index)=>{
                                return (                  
                                    <MessageItem
                                        {...this.props}
                                        {...value}
                                        value = {value}
                                        order={ index}
                                        key={value.messageId}
                                    ></MessageItem>
                                )
                            })
                            : <li className="noWords">暂无消息</li>
                        }
                     </ul>                        
                </StyleMessageList>
        )
    }
}
export default MessageListUI