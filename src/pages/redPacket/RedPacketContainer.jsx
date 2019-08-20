import React, { Component } from 'react'
import { StyleRedPacket } from './StyleRedPacket'

import People from './people/PeopleContainer'
import Person from './person/PersonContainer'


class RedPacketContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      packet: 'redPacket'
    }
  }

  componentDidMount() { }

  componentWillReceiveProps(nextProps) {
    if(nextProps.redPacket == true)
      this.setState({
        packet: 'openRedPacket'
      })
  }

  fn(data) {
    if(data == false)
    this.setState({
      packet: 'redPacket'
    })
  }
  
  render() {
    let tempPacket
    if (this.props.type === 'People') {
      tempPacket = <People pfn={this.fn.bind(this)}></People>;
    } else {
      tempPacket = <Person pfn={this.fn.bind(this)}></Person>;
    }
    return (
      <StyleRedPacket className={this.state.packet}>
        <div className="topBar">
          <div className="title">发红包</div>
          <div className="quitButton" onClick={() => {
            this.setState({
              packet: 'redPacket'
            })
            setTimeout(() => {
              this.setState({
                packet: 'redPacket'
              })
            }, 200);
          }}></div>
        </div>
        {tempPacket}
      </StyleRedPacket>
    )
  }
}

export default RedPacketContainer