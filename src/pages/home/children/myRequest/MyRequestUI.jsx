import React, { Component } from 'react';

import MyRequestUI from './MyRequestUI'


class MyRequestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <MyRequestUI>
      </MyRequestUI>
    );
  }
}

export default MyRequestContainer;