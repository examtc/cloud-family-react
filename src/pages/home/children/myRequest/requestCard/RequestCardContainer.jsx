import React, { Component } from 'react';
import { StyleRequestCard } from './StyleRequestCard'

class RequestCardUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    }
  }
  componentDidMount() {
    this.setState({
      height: this.props.Cen * 28 + 50
    })
  }
  render() {
    let tempPass
    if (this.props.pass === '通过') {
      tempPass = <div className="pass">已通过</div>
    } else if (this.props.pass == '未审批' || this.props.pass == '未审核') {
      tempPass = <div className="willpass">未审批</div>
    } else {
      tempPass = <div className="nopass">未通过</div>
    }

    let tempCard
    if (this.props.Type) {
      tempCard = <div>
        <div className="cardImgContainer">
          <img width="35" height="35" className="cardImg" src={this.props.img} alt="" />
        </div>
        <div className="cardName">我的请假</div>
        <div className="cardItem">
          <span className="textSpan">部门：{this.props.dep}</span>
          <span className="textSpan">职位：员工</span>
          <span className="textSpan">开始时间：{this.props.Begin}</span>
          <span className="textSpan">结束时间：{this.props.End}</span>
          <span className="textSpan">请假天数：{this.props.x}天</span>
          <span className="textSpan">请假类型：{this.props.Type}</span>
          <span className="textSpan">请假事由：{this.props.Because}</span>
          {tempPass}
        </div>
      </div>;
    } else if (this.props.Date && this.props.Place) {
      tempCard = <div>
        <div className="cardImgContainer">
          <img width="35" height="35" className="cardImg" src={this.props.img} alt="" />
        </div>
        <div className="cardName">我的补签</div>
        <div className="cardItem">
          <span className="textSpan">部门：{this.props.dep}</span>
          <span className="textSpan">职位：员工</span>
          <span className="textSpan">开始时间：{this.props.Begin}</span>
          <span className="textSpan">结束时间：{this.props.End}</span>
          <span className="textSpan">补签时间：{this.props.Date}</span>
          <span className="textSpan">补签地点：{this.props.Place}</span>
          <span className="textSpan">补签事由：{this.props.Because}</span>
          {tempPass}
        </div>
      </div>;
    } else {
      tempCard = <div>
        <div className="cardImgContainer">
          <img width="35" height="35" className="cardImg" src={this.props.img} alt="" />
        </div>
        <div className="cardName">我的{this.props.text}</div>
        <div className="cardItem">
          <span className="textSpan">部门：{this.props.dep}</span>
          <span className="textSpan">职位：员工</span>
          <span className="textSpan">开始时间：{this.props.Begin}</span>
          <span className="textSpan">结束时间：{this.props.End}</span>
          <span className="textSpan">{this.props.text}天数：{this.props.x}天</span>
          <span className="textSpan">{this.props.text}事由：{this.props.Because}</span>
          {tempPass}
        </div>
      </div>;
    }
    
    const height = {
      height: this.state.height + 'px'
    }
    return (
      <StyleRequestCard style={height}>
        {tempCard}
      </StyleRequestCard>
    );
  }
}

export default RequestCardUI;