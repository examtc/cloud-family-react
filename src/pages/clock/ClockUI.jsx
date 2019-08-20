import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import SigninContainer from './signin/sign'
import { withRouter } from "react-router";
import { StyleClockContainer } from './styleClock'
import Map from './map/map'

class ClockUI extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInfo:{}
         }
    }
    componentDidMount(){
        this.setState({
            userInfo: JSON.parse(localStorage.getItem("userInfo"))
        },()=>{
            console.log(this.state.userInfo)
        }
        )
        
      }
    render() { 
        return (
            <StyleClockContainer>
                <NavBar
                mode="light"
                icon={<Icon type="left" size="md" color='#000'/>}
                onLeftClick={() => {
    
                    this.props.history.goBack()
                }}
                >签到</NavBar>
                <Map></Map>
                <SigninContainer userInfo={this.state.userInfo} loc="dasd"></SigninContainer>
    
            </StyleClockContainer>
    
        )
    }
}

export default withRouter(ClockUI)