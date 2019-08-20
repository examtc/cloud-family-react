import React, { Component } from 'react';
import { TopHeaderContainer } from './StyleTopHeader'

import { withRouter } from "react-router";
import jtImg from 'assets/image/colleague/jiantou.png'

class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleLeftClick(e){
        this.props.history.goBack()
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() { 
        
        let {leftEle,leftEvent,rightEle, rightEvent, left} = this.props;
        
        return ( 
            <TopHeaderContainer>
                {left !== false && <div className="leftContainer" onClick={ leftEvent ? leftEvent : this.handleLeftClick.bind(this)}>
                <img src={jtImg} alt=""/>
                </div>}
                 {leftEle}
                 {this.props.title}
                 <div className="rightContainer" onClick={rightEvent}>
                 {rightEle}
                </div>
            </TopHeaderContainer>
         );
    }
}
 
export default withRouter(TopHeader);