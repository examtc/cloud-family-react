import React, { Component } from 'react';
import { StyleDisgreeApproval } from './StyleDisgreeApproval'
import StyleTopHeader from 'components/topHeader/'
import { TextareaItem } from 'antd-mobile';
import axios from 'axios'
import { nextTick } from 'q';

class DisgreeApprovalUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t: '',
      name: '',
      begin: '',
      end: '',
      type: '',
      beca: '',
      wordsNum: 0,
      wordsColor: 'normal'
    }
  }
  async componentDidMount() {
  }
  render() {
    return (
      <StyleDisgreeApproval>
        <StyleTopHeader title="我的审批"></StyleTopHeader>
        <div className="area">
          <div className="title">拒绝</div>
          <TextareaItem
            placeholder='请输入理由:'
            rows='5'
            ref={el => this.labelFocusInst = el}
            onChange={(value) => {
              if (value.length > 500) {
                this.setState({
                  wordsNum: '最多500字, 已输入' + value.length + '字',
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
          <div className="submitButton" onTouchStart={() => {
            axios.post(`http://39.106.73.167/autoaudit/dicaudit?uuid=${JSON.parse(localStorage.getItem('userInfo')).uuid}&audittype=${localStorage.getItem('audittype')}&auditDicision=${document.getElementsByTagName("textarea")[0].value}&auditid=${localStorage.getItem('auditid')}`, {})
              .then((result) => {
                if (result.data.success === false) {
                  alert('审核失败')
                } else {
                  alert('审核成功')
                  nextTick(this.props.history.go(-1))
                }
              })
              .catch(function (error) {
                console.log(error);
              });
            localStorage.removeItem('auditid')
            localStorage.removeItem('audittype')
            localStorage.removeItem('uuid')
          }}> 确认</div>
        </div>
      </StyleDisgreeApproval>
    );
  }
}

export default DisgreeApprovalUI;