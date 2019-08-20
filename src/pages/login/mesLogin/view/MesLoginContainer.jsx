import React, { Component } from 'react'
import Head from 'components/loginHead'
import Forget from 'components/forgetPassword'
import { StyleMesLogin } from './StyleMesLogin'
import MoreLogin from 'components/moreLogin'
import Show from 'assets/image/login/show.png'
import Eye from 'assets/image/login/eye.png'
import Submit from 'assets/image/login/角标@2x.png'
import Submit2 from 'assets/image/login/角标拷贝@2x.png'

import { Toast } from 'antd-mobile'
export default class MesLogin extends Component {
    constructor(props){
        super(props)
        this.state=({
            isShow:false,
            isShowForget:false,
            showPassword:true,
            passwordVal:"",
            emailVal:""
        })
        this.handleShowpassword= this.handleShowpassword.bind(this)
        this.handlePassword= this.handlePassword.bind(this)
        this.handleHideShadow= this.handleHideShadow.bind(this)
        this.handleShadow= this.handleShadow.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleEmail= this.handleEmail.bind(this)
        this.showForget= this.showForget.bind(this)
        this.handleForgetShadow= this.handleForgetShadow.bind(this)
    }
    render() {
        return (
            <StyleMesLogin>
                <Head></Head>
                <a href="/register">注册</a>
                {(this.state.isShow || this.state.isShowForget) && <div className="shadow" onClick={this.handleHideShadow}></div>}
                <main>
                    <h2>欢迎来到云之家</h2>
                    <div>
                        <form>
                            <div className="email">
                                <input 
                                    placeholder="请输入邮箱" 
                                    value={this.state.emailVal}
                                    onChange={this.handleEmail}
                                    name="" />
                            </div>
                            <div className="password">
                            <input 
                                    type={ this.state.showPassword ? "password" : "text" } 
                                    value={this.state.passwordVal}
                                    onChange={this.handlePassword}
                                    placeholder="请输入密码" />
                                {this.state.showPassword && 
                                <img 
                                    src={Eye} 
                                    onClick={this.handleShowpassword} 
                                    style={{height:"0.1rem",width:"0.18rem"}} 
                                    alt="" />}
                                {!this.state.showPassword && 
                                <img 
                                    onClick={this.handleShowpassword} 
                                    src={Show} 
                                    alt="" />}
                            </div>
                        </form>
                        <p>
                            <span></span>
                            <label onClick={this.showForget}>忘记密码</label>
                        </p>
                        <div className="submit">
                            {
                                this.state.passwordVal!=="" && this.state.emailVal!==""?
                                <img src={Submit} onClick={this.handleSubmit} alt="" />:
                                <img src={Submit2} alt="" />
                            }
                        </div>
                    </div>
                </main>
                <Forget
                    handleForgetShadow={this.handleForgetShadow} 
                    isShowForget={this.state.isShowForget}
                    handleHideShadow={this.handleHideShadow}
                ></Forget>
                <MoreLogin
                    handleShadow={this.handleShadow} 
                    isShow={this.state.isShow}
                    handleHideShadow={this.handleHideShadow}
                ></MoreLogin>
            </StyleMesLogin>
        )
    }
    handleShowpassword(){
        this.setState({
            showPassword:!this.state.showPassword
        })
    }
    handlePassword(e){
        this.setState({
            passwordVal:e.target.value
        })
    }
    handleEmail(e){
        this.setState({
            emailVal:e.target.value
        })
    }
    async handleShadow(data){
        await this.setState({
            isShow:data
        })
    }
    handleHideShadow(){
        this.setState({
            isShow:false,
            isShowForget:false
        })
    }
    handleSubmit(){
        if(!this.state.emailVal.match(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)){
            Toast.info("邮箱格式不正确",1)
        }
        console.log(this.state)
    }   
    showForget(){
        this.setState({
            isShowForget:!this.state.isShowForget
        })
    }
    async handleForgetShadow(data){
        await this.setState({
            isShowForget:data
        })
    }
}
