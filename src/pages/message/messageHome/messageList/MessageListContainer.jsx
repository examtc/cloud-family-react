import React,{ Component } from 'react'
import {withRouter} from 'react-router-dom'

import BScroll from 'better-scroll'

import MessageListUI from './MessageListUI'
class MessageList extends Component {

    componentDidMount() {
        this.bscroll = new BScroll("#bscrollwrap",{
            scrollY: true,
            click: true            
        })   

    }
    render() {        
        return (
            <MessageListUI
                {...this.props}
            ></MessageListUI>              
        )
    }
}
export default withRouter(MessageList)