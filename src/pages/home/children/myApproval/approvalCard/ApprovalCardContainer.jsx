import React, { Component } from 'react';
import { StyleApprovalCard } from './StyleApprovalCard'
import MyLink from '../../../../../components/home/common/MyLink'
import axios from 'axios'

class ApprovalCardUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    }
  }
  componentDidMount() {
    this.setState({
      height: this.props.Cen * 25 + 105
    })
  }
  render() {
    let tempPass
    if (this.props.pass == "未审批" || this.props.pass == "未审核" || this.props.pass == "审核中") {
      tempPass =
        <div className="button">
        <span className="agreeButton" onClick={() => {
          axios.post(`http://39.106.73.167/autoaudit/dicaudit?uuid=${JSON.parse(localStorage.getItem('userInfo')).uuid}&audittype=${this.props.audittype}&auditDicision=通过&auditid=${this.props.id}`, {})
          .then((result) => {
            if (result.data.success === false) {
              alert('审核失败,请稍后重试')
            } else {
              window.location.reload()
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }}>同意</span>|
              <MyLink url="/AIApproval/disagree" exact >
          <span className="disagreeButton" onTouchStart={() => {
            localStorage.setItem('auditid', this.props.id)
            localStorage.setItem('audittype', this.props.audittype)
            localStorage.setItem('uuid', JSON.parse(localStorage.getItem('userInfo')).uuid)
          }}>拒绝</span>
          </MyLink>
        </div>;
    } else if (this.props.pass == "通过") {
      tempPass =
        <div className="success">
          <span>审批通过</span>
        </div>;
    } else {
      tempPass =
        <div className="danger">
          <span>审批不通过</span>
        </div>;
    }
    let tempCard
    if (this.props.Type) {
      tempCard = <div>
        <div className="cardImgContainer">
          <img width="35" height="35" className="cardImg" src={this.props.img} alt="" />
        </div>
        <div className="cardName">{this.props.Uname}的{this.props.text}</div>
        <div className="cardItem">
          <span className="textSpan">部门：{this.props.dep}</span>
          <span className="textSpan">职位：员工</span>
          <span className="textSpan">开始时间：{this.props.Begin}</span>
          <span className="textSpan">结束时间：{this.props.End}</span>
          <span className="textSpan">{this.props.text}天数：{this.props.x}天</span>
          <span className="textSpan">{this.props.text}类型：{this.props.Type}</span>
          <span className="textSpan">{this.props.text}事由：{this.props.Because}</span>
          {tempPass}
        </div>
      </div>;
    } else if (this.props.Date && this.props.Place) {
      tempCard = <div>
        <div className="cardImgContainer">
          <img width="35" height="35" className="cardImg" src={this.props.img} alt="" />
        </div>
        <div className="cardName">{this.props.Uname}的{this.props.text}</div>
        <div className="cardItem">
          <span className="textSpan">部门：{this.props.dep}</span>
          <span className="textSpan">职位：员工</span>
          <span className="textSpan">开始时间：{this.props.Begin}</span>
          <span className="textSpan">结束时间：{this.props.End}</span>
          <span className="textSpan">{this.props.text}时间：{this.props.Date}</span>
          <span className="textSpan">{this.props.text}地点：{this.props.Place}</span>
          <span className="textSpan">{this.props.text}事由：{this.props.Because}</span>
          {tempPass}
        </div>
      </div>;
    } else {
      tempCard = <div>
        <div className="cardImgContainer">
          <img width="35" height="35" className="cardImg" src={ this.props.img } alt="" />
        </div>
        <div className="cardName">{this.props.Uname}的{this.props.text}</div>
        <div className="cardItem">
          <span className="textSpan">部门：{this.props.dep}</span>
          <span className="textSpan">职位：员工</span>
          <span className="textSpan">开始时间：{this.props.Begin}</span>
          <span className="textSpan">结束时间：{this.props.End}</span>
          <span className="textSpan">{this.props.text}事由：{this.props.Because}</span>
          {tempPass}
        </div>
      </div>;
    }

    const height = {
      height: this.state.height + 'px'
    }
    return (
      <StyleApprovalCard style={height}>
        {tempCard}
      </StyleApprovalCard>
    );
  }
}

export default ApprovalCardUI;