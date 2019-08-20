import React, { Component } from 'react';
import HomeContainer from './views/HomeContainer'
import { withRouter } from 'react-router'

class index extends Component {
        constructor(props) {
            super(props);
            this.state = {  }
            
        }
    render() {
        return (
            <HomeContainer></HomeContainer>
        );
    }
}

export default withRouter(index);