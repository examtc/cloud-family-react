import React, { Component } from 'react'
import wechat from 'assets/image/login/wechat.png'
import mes from 'assets/image/login/mes.png'
import {StyleMoreLogin} from './StyleMoreLogin'
import { withRouter } from 'react-router-dom'
class MoreLogin extends Component {
    constructor(props){
        super(props)
        this.state=({
            isShow:!props.isShow,
        })
        this.handleChange=this.handleChange.bind(this)
        this.toWechatLogin= this.toWechatLogin.bind(this)
        this.toMessageLogin= this.toMessageLogin.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isShow === false) {
            this.setState({
                isShow:true
            })
        }
    }
    render() {
        return (
            <StyleMoreLogin>
            {
                this.state.isShow? <span onClick={this.handleChange}>更多登录方式</span> : 
                <div className={this.props.isShow===true?"moreLogin animated slideInUp"
                    :"moreLogin animated slideOutDown"}>
                    <aside>
                        <span onClick={this.toWechatLogin}>
                            <img src={wechat} alt="" />微信登陆
                        </span>
                        <span onClick={this.toMessageLogin}>
                            <img src={mes} alt="" />邮箱登陆
                        </span>
                    </aside>
                    <span onClick={this.handleChange}>取消</span>
                </div>}
            </StyleMoreLogin>
        )
    }
    handleChange(){
        this.setState({
            isShow:!this.state.isShow
        })
        this.props.handleShadow(this.state.isShow)
    }
    toWechatLogin(){
        this.props.history.push('/login/wechat')
    }
    toMessageLogin(){
        this.props.history.push('/login/message')
    }
}


export default withRouter(MoreLogin)