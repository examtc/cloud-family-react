import React, { Component } from 'react';
import { StyleMyRequest } from './StyleMyRequest'
import { myFetch } from '../../../../util/http/fetch'
import axios from 'axios'

import MyRequestItemUI from './myRequestItem/MyRequestItemContainer'
class MyRequestUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approvalList: [],
      lengthResult: []
    }
  }
  async componentDidMount() {
    let result = await axios.get(`http://39.106.73.167/autoaudit/myinitiate?uuid=${JSON.parse(localStorage.getItem('userInfo')).uuid}`, {})
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
    let tempRequest
    if (this.state.lengthResult.length > 0) {
      tempRequest = <MyRequestItemUI {...this.state}></MyRequestItemUI>;
    } else {
      tempRequest = <div className="container"><div className="defaultImgCon"></div> <div className="defaultTitle">没有审批记录哦~</div></div>;
    }
    return (
      <StyleMyRequest>
        {tempRequest}
      </StyleMyRequest>
    );
  }
}

export default MyRequestUI;