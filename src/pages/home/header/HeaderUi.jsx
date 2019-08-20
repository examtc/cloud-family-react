import React, { Component } from 'react';
import { HeaderContainer as HeaderContainerStyled } from './HeaderStyled'
import { withRouter } from "react-router";
class HeaderUi extends Component {

    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }

    handleClick(){
        this.props.history.push('./mime')
    }
    render() {
        return (
            <HeaderContainerStyled img={this.state.img}>
                <div className="header_text">
                    Welcome To Yun Zhi Jia
                </div>            
                <div className="header_img" onClick={this.handleClick.bind(this)}></div>
            </HeaderContainerStyled>
        );
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('userInfo'))
        this.setState({
            img: data ? data.favpath : ""
        })
    }
}

export default withRouter(HeaderUi);