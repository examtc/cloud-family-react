import React, { Component } from 'react';
import { withRouter } from "react-router";

import { StyleOption } from './StyleOption'
import jt from 'assets/image/home/mime/jt.png'

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <StyleOption>
                <div className="text">{this.props.text} </div>
                <div className="value">{this.props.value} </div>
                <img src={jt} alt="" />
            </StyleOption>
         );
    }
}
 
export default withRouter(Option);