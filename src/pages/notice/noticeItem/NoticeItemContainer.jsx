import React, { Component } from 'react'
import { StyleNoticeItem } from './StyleNoticeItem'


class NoticeItemContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StyleNoticeItem>
        <div className="title">{this.props.type}</div>
        <div className="date">{this.props.date}</div>
        <div className="text">通知：{this.props.text}</div>
      </StyleNoticeItem>
    )
  }
}

export default NoticeItemContainer
