// 圆球动画默认在右上角
// 引入组件，父组件必须是相对定位
import React, { Component } from 'react';
import { StyleCircle } from './StyleCircle'

class CircleUI extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <StyleCircle>
        <span className="firstCricle"></span>
        <span className="secondCricle"></span>
        <span className="thirdCricle"></span>
        <span className="lastCricle"></span>
      </StyleCircle>
    );
  }
}

export default CircleUI;