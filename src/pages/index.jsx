import React from 'react'

import { TabBar } from 'antd-mobile'

import homeImg from 'assets/image/home.png'
import homeActiveImg from 'assets/image/home-active.png'
import collegeImg from 'assets/image/colleague.png'
import collegeActiveImg from 'assets/image/colleague-active.png'
import messageImg from 'assets/image/message.png'
import messageActiveImg from 'assets/image/message-active.png'


import HomeIndex from './home/'
import MessageContainer from './message/messageHome/MessageContainer'
import Colleague from './colleague/'
import GuideContainer from 'components/guide/guideContainer'

// import MessageIndex from 'pages/message/'

import { change } from '../pages/home/ActionCreator'
import { connect } from 'react-redux'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.selectedT,
      hidden: false,
      fullScreen: true,
    };

  }
  
  render() {
      console.log(this)
    if (localStorage.getItem('first')){
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#929292"
          tintColor="#74d4e0"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="消息"
            key="message"
            badge={4}
            icon={<div style={{
              width: '28px',
              height: '22px',
              background: `url(${messageImg}) center center /  26px 26px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '28px',
              height: '22px',
              background: `url(${messageActiveImg}) center center /  26px 26px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'message'}
            onPress={() => {
              this.setState({
                selectedTab: 'message',
              });
             this.props.change('message')
            }}
            data-seed="message"
          >
            <MessageContainer></MessageContainer>
            {/* <MessageIndex/> */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '28px',
                height: '22px',
                background: `url(${homeImg}) center center /  26px 26px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '28px',
                height: '22px',
                background: `url(${homeActiveImg}) center center /  26px 26px no-repeat` }}
              />
            }
            title="云之家"
            key="home"
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
              this.props.change('home')
            }}
            data-seed="home"
          >
            <HomeIndex></HomeIndex>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '28px',
                height: '22px',
                background: `url(${collegeImg}) center center /  26px 26px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '28px',
                height: '22px',
                background: `url(${collegeActiveImg}) center center /  26px 26px no-repeat` }}
              />
            }
            title="同事圈"
            key="colleague"
            selected={this.state.selectedTab === 'colleague'}
            onPress={() => {
              this.setState({
                selectedTab: 'colleague',
              });
              this.props.change('colleague')
            }}
          >
            <Colleague></Colleague>
          </TabBar.Item>
         
        </TabBar>
      </div>
    )}else {
        return (<GuideContainer></GuideContainer>)
    }
  }
}

export default connect(
    state => ({
    selectedT: state.home.selectedT,
    }),
    dispatch => ({
      change(name) {
        dispatch(change(name))
      },
    })
  )(Home)