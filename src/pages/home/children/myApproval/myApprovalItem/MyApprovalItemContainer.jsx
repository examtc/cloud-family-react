import React, { Component } from 'react';
import { StyleMyApprovalItem } from './StyleMyApprovalItem'
import ApprovalCardUI from '../approvalCard/ApprovalCardContainer'

class MyApprovalItemUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leave: [],
      reim: [],
      sign: [],
      trip: [],
      total: []
    }
  }
  async componentDidMount() {
    Date.prototype.toLocaleString = function () {
      return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate();
    }
    await this.setState({
      leave: this.props.approvalList.leaveaudit,
      reim: this.props.approvalList.reimaudit,
      sign: this.props.approvalList.signaudit,
      trip: this.props.approvalList.tripaudit
    })
    for (let i = 0; i < this.state.leave.length; i++) {
      let betime = new Date(parseInt(this.state.leave[i].worCreatetime))
      let entime = new Date(parseInt(this.state.leave[i].worEnddate))
      let xtime = (this.state.leave[i].worEnddate - this.state.leave[i].worCreatetime)
      let btime = betime.toLocaleString()
      let etime = entime.toLocaleString()
      let x = Math.floor(xtime / (1000 * 60 * 60 * 24) + 1)
      let key = 'leaveaudit' + this.state.leave[i].worId
      
      this.setState({
        total: [...this.state.total, {
          text: '请假',
          id: this.state.leave[i].worId,
          Uname: this.state.leave[i].worUser.rlname,
          Uimg: this.state.leave[i].worUser.favpath,

          Type: this.state.leave[i].ltype.ltypeName,
          Begin: btime,
          End: etime,
          x,
          Because: this.state.leave[i].worContent,
          Dic: this.state.leave[i].worDicision,
          Cen: 7,
          pass: this.state.leave[i].worDicision,
          dep: this.state.leave[i].worUser.departs.depName,
          img: this.state.leave[i].worUser.favpath,
          audittype: 'leaveaudit',
          key
        }]
      })
    }
    for (let i = 0; i < this.state.reim.length; i++) {
      let betime = new Date(parseInt(this.state.reim[i].reimCreatetime))
      let entime = new Date(parseInt(this.state.reim[i].reimFinaltime))
      let btime = betime.toLocaleString()
      let etime = entime.toLocaleString()
      let key = 'reimaudit' + this.state.reim[i].reimId
      this.setState({
        total: [...this.state.total, {
          text: '报销',
          id: this.state.reim[i].reimId,
          Uname: this.state.reim[i].reimUser.rlname,
          Uimg: this.state.reim[i].reimUser.favpath,
          Begin: btime,
          End: etime,
          Because: this.state.reim[i].reimContent,
          Dic: this.state.reim[i].reimDicision,
          Cen: 5,
          pass: this.state.reim[i].reimDicision,
          dep: this.state.reim[i].reimUser.departs.depName,
          img: this.state.reim[i].reimUser.favpath,
          audittype: 'reimaudit',
          key
        }]
      })
    }
    for (let i = 0; i < this.state.sign.length; i++) {
      let betime = new Date(parseInt(this.state.sign[i].repUser.begintime))
      let time = new Date(parseInt(this.state.sign[i].replDate))
      if (this.state.sign[i].replDate == null) {
        time = new Date(parseInt(this.state.sign[i].replCreatetime))
      }
      let entime = new Date(parseInt(this.state.sign[i].repUser.endtime))
      let btime = betime.toLocaleString()
      let t = time.toLocaleString()
      let etime = entime.toLocaleString()
      let key = 'signaudit' + this.state.sign[i].replId
      this.setState({
        total: [...this.state.total, {
          text: '补签',
          id: this.state.sign[i].replId,
          Uname: this.state.sign[i].repUser.rlname,
          Uimg: this.state.sign[i].repUser.favpath,
          Begin: btime,
          End: etime,
          Because: this.state.sign[i].replContent,
          Dic: this.state.sign[i].replDicision,

          Date: t,
          Place: this.state.sign[i].replPlace,
          Cen: 7,
          pass: this.state.sign[i].replDicision,
          dep: this.state.sign[i].repUser.departs.depName,
          img: this.state.sign[i].repUser.favpath,
          audittype: 'signaudit',
          key
        }]
      })
    }
    for (let i = 0; i < this.state.trip.length; i++) {
      let betime = new Date(parseInt(this.state.trip[i].worBegindate))
      let entime = new Date(parseInt(this.state.trip[i].worEnddate))
      let btime = betime.toLocaleString()
      let etime = entime.toLocaleString()
      let key = 'tripaudit' + this.state.trip[i].worId
      this.setState({
        total: [...this.state.total, {
          text: '外出',
          id: this.state.trip[i].worId,
          Uname: this.state.trip[i].worUser.rlname,
          Uimg: this.state.trip[i].worUser.favpath,
          Begin: btime,
          End: etime,
          Because: this.state.trip[i].worContent,
          Dic: this.state.trip[i].worDicision,
          Cen: 5,
          pass: this.state.trip[i].worDicision,
          dep: this.state.trip[i].worUser.departs.depName,
          img: this.state.trip[i].worUser.favpath,
          audittype: 'tripaudit',
          key
        }]
      })
    }
  }
  render() {
    let tempCard = []
    for (let i = 0; i < this.state.total.length; i++) {
      tempCard[i] = <ApprovalCardUI {...this.state.total[i]}></ApprovalCardUI>;
    }
    return (
      <StyleMyApprovalItem>
        <div className="container">
          {tempCard}
        </div>
      </StyleMyApprovalItem>
    );
  }
}

export default MyApprovalItemUI;