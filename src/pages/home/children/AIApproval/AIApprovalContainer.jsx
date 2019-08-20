import React, { Component } from 'react';
import { StyleAIApproval } from './StyleAIApproval'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import MyApproval from '../myApproval/MyApprovalContainer'
import MyRequest from '../myRequest/MyRequestContainer'

class AIApprovalUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approvalList: []
    }
  }
  componentDidMount() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: false,
      autoplay: false,
      pagination: {
        el: '.oneoftwoButton',
        clickable: true,
        buttonClass: 'otherOne',
        bulletActiveClass: 'activeOne',
        renderBullet: function (index, className) {
          let text
          switch (index) {
            case 0: text = '我的审批'; break;
            case 1: text = '我发起的'; break;
          }
          return '<span class="' + className + '">' + text + '</span>';
        }
      }
    })
  }
  render() {
    return (
      <StyleAIApproval>
        <div className="topBar">
          <div className="oneoftwoButton">
          </div>
          <div className="quitButton" onClick={() => {
            this.props.history.go(-1)
          }}></div>
        </div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="oneoftwo swiper-slide">
              <MyApproval></MyApproval>
            </div>
            <div className="oneoftwo swiper-slide">
              <MyRequest></MyRequest>
            </div>
          </div>
        </div>
      </StyleAIApproval>
    );
  }
}

export default AIApprovalUI;