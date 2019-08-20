import React, { Component } from 'react'
import { GroupDetailsContainer } from './StyleGroupDetails'

import TopHeader from '../../../components/topHeader/index'
import SlideUi from '../../../components/slide/slideUi'

class GroupDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pCount: 4,
      pName: 'UI大神交流群',
      myName: '小王'
    }
  }

  componentDidMount() {
    this.id = this.props.location.state.messageId
    this.messageType = this.props.location.state.messageType
    // console.log("拿到聊天数据id：" + this.id,"当前页面的消息类型： "+ this.messageType)
  }

  render() {
    return (
      <GroupDetailsContainer>
        <TopHeader title={'聊天信息(' + this.state.pCount + ')'} rightEle='保存' rightEvent={this.save}></TopHeader>
        <div className="headList">
          <ul>
            <li><span className="headItem"></span></li>
            <li><span className="headItem"></span></li>
            <li><span className="headItem"></span></li>
            <li><span className="headItem"></span></li>
            <li>
              <span className="headItem addItem" onClick={this.addPerson}>
                <span className="addIcon">
                  <span className="oneLine"></span>
                  <span className="twoLine"></span>
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div className="ofPeople">
          <div className="ofName">
            <span className="title">群聊名称</span>
            <input type="text" className="text" placeholder={this.state.pName} />
          </div>
          <div className="line-1px"></div>
          <SlideUi
            head='消息免打扰'
            isSlide={{ isTrue: true }}
            event={this.messageType}
          ></SlideUi>
          <div className="line-1px"></div>
          <SlideUi
            head='保存到联系人'
            isSlide={{ isTrue: false }}
            event={this.copyPerson}
          ></SlideUi>
        </div>
        <div className="ofMine">
          <div className="ofName">
            <span className="title">我在本群的昵称</span>
            <input type="text" className="text" placeholder={this.state.myName} />
          </div>
          <div className="line-1px"></div>
          <SlideUi
            head='显示群成员昵称'
            isSlide={{ isTrue: true }}
            event={this.openName}
          ></SlideUi>
        </div>
        <div className="buttonContainer">
          <div className="clearMessage" onClick={this.clearMessage}>清空聊天记录</div>
          <div className="line-1px"></div>
          <div className="deleteExit" onClick={this.deleteExit}>删除并退出</div>
        </div>
      </GroupDetailsContainer>
    )
  }
  save() {
    alert('保存事件')
  }
  addPerson() {
    alert('添加群员事件')
  }
  messageType() {
    console.log('消息免打扰')
  }
  copyPerson() {
    console.log('保存到联系人')
  }
  openName() {
    console.log('显示群成员昵称')
  }
  clearMessage() {
    alert('清空聊天记录')
  }
  deleteExit() {
    alert('删除并退出')
  }
}

export default GroupDetails