import React,{ Component } from 'react'
import {withRouter} from 'react-router-dom'
import MessageItemUI from './MessageItemUI'
class MessageItem extends Component {
    constructor(props) {
        super(props)
        this.state={
            isActive: false
        }
        this.changeActive = this.changeActive.bind(this)
        this.enterItem = this.enterItem.bind(this)
    }
    //控制高亮class
    changeActive(){
        this.setState({
            isActive: !this.state.isActive
        })
    }
    //通过某一条item跳转到聊天记录界面
    enterItem(messageType,messageTitle) {
        let path = {
            pathname: "/messagelog",
            //消息Id  当前页的名称  消息类型（红包） 群名称（May update）
            state: {
                id: this.props.messageId,
                //更改为动态的
                messageUserInfo: this.props.value,
                currentPage: this.props.titleOption,
                messageType,
                messageTitle
            }
        }
        this.props.history.push(path)      
    }
    render() {
        return (
            <MessageItemUI
                {...this.props}
                {...this.state}
                changeActive={this.changeActive}
                enterItem={this.enterItem}
            ></MessageItemUI>
        )
    }
}
export default withRouter(MessageItem)