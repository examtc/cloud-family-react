import React, { Component } from 'react';
import { StyleGuide } from './StyleGuide'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

import Circle from '../circle/CircleContainer'

class GuideUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goonText: '下一步',
      goon: 'goon'
    }
  }
  componentDidMount() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: false,
      autoplay: false,
      pagination: {
        el: '.swiper-pagination',
        buttonClass: 'other-slide',
        bulletActiveClass: 'active-slide'
      },
      navigation: {
        nextEl: '.goon'
      },

      on: {
        slideChangeTransitionStart:() => {
          if(mySwiper.activeIndex === 2) {
            this.setState({
              goon: 'go',
              goonText: '进入云之家'
            })
          }
        }
      }
    })
  }
  componentDidUpdate() {
    if (document.getElementsByClassName('go').length !== 0){
      document.getElementById('GO').addEventListener('click', ()=>{
        localStorage.setItem('first', true)
        window.location.reload()
      }, false)
    }
  }
  render() {
    return (
      <StyleGuide>
        <div className="firstGuide">
          <span className="gothrow"
            onClick={() => {
              localStorage.setItem('first', true)
              window.location.reload()
            }}
          >跳过</span>
          <Circle></Circle>
          <div className="swiperContainer swiper-container">
            <div className="swiper swiper-wrapper">
              <div className="firstSwiper swiper-slide">
                <img src="./images/guide/guide1.png" alt="" width="264px" />
                <span className="slide-text">出差审批，一步到位</span>
              </div>
              <div className="secondSwiper swiper-slide">
                <img src="./images/guide/guide2.png" alt="" width="264px" />
                <span className="slide-text">智能打卡，工作更省心</span>
              </div>
              <div className="lastSwiper swiper-slide">
                <img src="./images/guide/guide3.png" alt="" width="264px" />
                <span className="slide-text">同事圈，沟通更亲密</span>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className={this.state.goon} id="GO">{this.state.goonText}</div>
        </div>
      </StyleGuide>
    );
  }
}

export default GuideUI;