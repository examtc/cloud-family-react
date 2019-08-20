import React, { Component } from 'react';

import { TextareaItem } from 'antd-mobile';
import {StyleTextAreaControl} from './StyleTextAreaControl'

class TextAreaControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wordsNum: 0,
            wordsColor: 'normal'
          }
    }
    render() { 
        return ( 
            <StyleTextAreaControl>
          <TextareaItem
            // placeholder="click label to focus input"
            title={this.props.title}
            rows='3'
            ref={el => this.labelFocusInst = el}
            onChange={(value) => {
                console.log(value)
                this.props.change(value)
              if (value.length > 500) {
                this.setState({
                  wordsNum: '最多输入500字, 当前已输入 ' + value.length + ' 字',
                  wordsColor: 'danger'
                })
              } else {
                this.setState({
                  wordsNum: value.length,
                  wordsColor: 'normal'
                })
              }
            }}
          >
          </TextareaItem>
          <div className={this.state.wordsColor}>
            {this.state.wordsNum}/500
          </div>
          </StyleTextAreaControl>
         );
    }
}
 
export default TextAreaControl;