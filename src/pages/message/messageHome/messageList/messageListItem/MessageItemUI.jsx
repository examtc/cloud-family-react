import React,{ Component } from 'react'

import {StyleMessageItem, StyleEllipsis } from './StyleMessageItem.js'
class MessageItemUI extends Component {
    handleClick(){
        this.props.history.push("./notice")
    }
    render() {
        return (
            <>
                <StyleMessageItem
                className={ this.props.isActive && 'active'}
                onTouchStart ={this.props.changeActive}
                onTouchEnd = {this.props.changeActive}
                onClick = { 
                            this.props.messageTitle === "通知" 
                            ? this.handleClick.bind(this)
                            : this.props.enterItem.bind(this,this.props.messageType,this.props.messageTitle)
                        }
            >
                    <div className="message-icon-wrap">
                        <div className="message-icon" >
                            <img className="icon-inner"
                                src={this.props.messageIcon} 
                                alt=""/>
                        </div>
                    </div>
                    <div className="message-text">
                        <h3>{this.props.messageTitle} </h3>
                        <StyleEllipsis>
                            {
                                this.props.newMessageName 
                                ? this.props.newMessageName + ":" + this.props.newMessage 
                                : this.props.newMessage 
                            } </StyleEllipsis>
                    </div>
                    <div className="message-time">
                        <span>{this.props.messageTime}</span>
                        {
                            this.props.unRead > 0 
                            ? <i>{this.props.unRead}</i> 
                            : ''
                        }
                        
                    </div>
                </StyleMessageItem>
            </>
        )
    }
}
export default MessageItemUI