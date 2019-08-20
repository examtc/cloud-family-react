import React from 'react'

import MyLink from './MyLink'

import './menuLine.css'

import { styleColor } from 'assets/styles/color.js'

class MenuLine extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      menuLine: "menuLine",
      menuList: "menuList",
      model: "modelClose"
    }
  }

  handleClickMenu(e) {
    e.stopPropagation();
    this.setState({
      menuLine: "menuLineOpen",
      menuList: "menuListOpen",
      model: "modelOpen"
    })
  }

  handleClickModel() {
    this.setState({
      menuLine: "menuLineClose",
      menuList: "menuListClose",
      model: "modelClose"
    })
  }

  render() {
    return (
      <>
        <div className={this.state.model}
        onTouchStart={this.handleClickModel.bind(this)}
        ></div>
        <div className={this.state.menuLine}
          style={{background: styleColor}}
          onClick={this.handleClickMenu.bind(this)}
        ></div>
        <div className={this.state.menuList} style={{background: styleColor}}>
          <ul>
            <MyLink url="/message" exact>消息</MyLink>
            <MyLink url="/" exact>云之家</MyLink>
            <MyLink url="/colleague" exact>同事圈</MyLink>
          </ul>
        </div>
      </>
    )
  }
}

export default MenuLine