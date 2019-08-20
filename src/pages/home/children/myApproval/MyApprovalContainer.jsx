import React, { Component } from 'react';
import { StyleMyApproval } from './StyleMyApproval'
import axios from 'axios'

import MyApprovalItemUI from './myApprovalItem/MyApprovalItemContainer'
class MyApprovalUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approvalList: [],
      lengthResult: []
    }
  }
  async componentDidMount() {
    let result = await axios.get(`http://39.106.73.167/autoaudit/queryaudit?uuid=${JSON.parse(localStorage.getItem('userInfo')).uuid}`, {})
      .then((result) => {
        return result.data
      })
      .catch(function (error) {
        console.log(error);
      })
    this.setState({
      approvalList: result.data,
      lengthResult: [...this.state.lengthResult, ...result.data.reimaudit, ...result.data.leaveaudit, ...result.data.signaudit, ...result.data.tripaudit]
    })
  }
  render() {
    let tempApproval
    if (this.state.lengthResult.length>0) {
      tempApproval = <MyApprovalItemUI {...this.state}></MyApprovalItemUI>;
    } else {
      tempApproval = <div className="container"><div className="defaultImgCon"></div> <div className="defaultTitle">没有审批记录哦~</div></div>;
    }
    return (
      <StyleMyApproval>
        {tempApproval}
      </StyleMyApproval>
    );
  }
}

export default MyApprovalUI;