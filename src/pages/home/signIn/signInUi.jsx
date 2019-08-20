import React, { Component } from 'react';
import { SignInContainer as SignStyled } from './signInStyled'
import Child from './Child'
import iconImg from 'assets/img/home/icon.png'

class signInUi extends Component {

    constructor(props) {
        super(props)
        // console.log(props)
        this.state={
            isSigin: true
        }
    }

    render() {

        const Sigin = []

        this.props.list.alrdsign.forEach(element => {
            Sigin.push({img: element.favpath, name: element.loginame,})
        });


        const notSigin = []

        this.props.list.nonesign.forEach(element => {
            notSigin.push({img: element.favpath, name: element.loginame,})
        });

        return (
            <SignStyled>
                <div className="signInHeader">
                    <p className={ this.state.isSigin ? 'active' : '' } onClick={this.switchList.bind(this)}>已签到</p>
                    <span></span>
                    <p className={ this.state.isSigin ? '' : 'active' } onClick={this.notSigin.bind(this)}>未签到</p>
                </div>
                
                <ul>
                    <Child list={this.state.isSigin ? Sigin : notSigin}></Child>
                    <img src={iconImg} alt=""/>
                </ul>
            </SignStyled>
        );
    }

    switchList() {
        this.setState({
            isSigin: true
        })
    }

    notSigin() {
        this.setState({
            isSigin: false
        })
    }
}

export default signInUi;