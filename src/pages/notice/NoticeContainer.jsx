import React, { Component } from 'react'
import { StyleNotice } from './StyleNotice'

import TopHeader from '../../components/topHeader/index'
import NoticeItem from './noticeItem/NoticeItemContainer'

class NoticeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          type: '人事调动',
          date: '07-26 20:09',
          text: '根据工作需要，现将小王由设计部门调至产品部门。'
        },
        {
          type: '公司活动',
          date: '07-26 10:09',
          text: '2019年8月15日公司将组织外出旅游。'
        },
        {
          type: '放假通知',
          date: '09-30 07:00',
          text: '2019年10月1日-10月7日放假，8日正常上班。'
        }
      ]
    }
  }
  render() {
    let tempItem = []
    for (let i = 0; i < this.state.list.length; i++) {
      tempItem[i] = <NoticeItem {...this.state.list[i]}></NoticeItem>;
    }
    return (
      <StyleNotice>
        <TopHeader title="通知"></TopHeader>
        {tempItem}
      </StyleNotice>
    )
  }
}

export default NoticeContainer
