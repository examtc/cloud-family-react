import React, { Component } from 'react';
import {StyleNotification} from './StyleNotification'
import TopHeader from 'components/topHeader/'
import Slide from 'components/slide/slideUi'
import { DatePicker, List } from 'antd-mobile';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n;
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return `${dateStr} ${timeStr}`;
}
class NotificationUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: now,
            time: now,
            utcDate: utcNow,
            dpValue: null,
            customChildValue: null,
            visible: false,
            isShow:false,
          }
    }
    tapShow(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() { 
        let minDate = new Date(nowTimeStamp - 1e7);
        const maxDate = new Date(nowTimeStamp + 1e7);
        return ( 
            <StyleNotification>
                <TopHeader title="新消息通知"></TopHeader>
                <div>
                    <div className="message">
                        <div className="item">
                            消息提醒<span>开启</span>
                        </div>
                        <div className="info">
                        请在“设置”-“通知”功能中，找到应用程序“云之家”进行修改
                        </div>
                        
                    </div>
                <Slide head='定时免打扰'  isSlide={{isTrue: false}} event={this.tapShow.bind(this)}></Slide>
               { !this.state.isShow||<div className="time">
                <DatePicker
                mode="time"
                minuteStep={2}
                use12Hours
                value={this.state.time}
                onChange={time => this.setState({ time })}
                >
                <List.Item arrow="horizontal">开始时间</List.Item>
                </DatePicker>
                <DatePicker
                mode="time"
                minuteStep={2}
                use12Hours
                value={this.state.time}
                onChange={time => this.setState({ time })}
                >
                <List.Item arrow="horizontal">结束时间</List.Item>
                </DatePicker>
           
                </div>}
                <div className="info">
                22:00至08:00,仅接收待办通知、@提及和单聊消息提醒
                        </div>
                </div>
            </StyleNotification>
         );
    }
}
 
export default NotificationUI;