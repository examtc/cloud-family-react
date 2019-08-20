import React, { Component } from 'react'
import Head from 'components/loginHead'
import MoreLogin from 'components/moreLogin'
import { StyleLogin } from './StyleLogin'
import { Toast } from 'antd-mobile';
import Show from 'assets/image/login/show.png'
import Forget from 'components/forgetPassword'
import Eye from 'assets/image/login/eye.png'
import Submit from 'assets/image/login/角标@2x.png'
import Submit2 from 'assets/image/login/角标拷贝@2x.png'
import { post } from 'util/http'
// import Circle from 'components/circle/CircleUI'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state=({
            showPassword:true,
            passwordVal:"",
            phoneVal:"",
            isShow:false,
            isShowForget:false
        }
        )
        // console.log(sessionStorage.getItem('login'))
        // if(!sessionStorage.getItem('login')){
        //     this.props.history.replace('./')
        // }
        this.handleShowpassword= this.handleShowpassword.bind(this)
        this.handlePassword= this.handlePassword.bind(this)
        this.phoneInput= this.phoneInput.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleHideShadow= this.handleHideShadow.bind(this)
        this.handleShadow= this.handleShadow.bind(this)
        this.handleForgetShadow= this.handleForgetShadow.bind(this)
        this.showForget= this.showForget.bind(this)
    }
    render() {
        return (
            <StyleLogin>
                <Head></Head>
                <a href="/#/register">注册</a>
                {(this.state.isShow || this.state.isShowForget) && <div className="shadow" onClick={this.handleHideShadow}></div>}
                <main>
                    <h2>欢迎来到云之家</h2>
                    <div>
                        <form>
                            <div className="phone">
                                <span>+86</span>
                                <input 
                                    onChange={this.phoneInput}
                                    type="text" 
                                    value={this.state.phoneVal} 
                                    maxLength="11" 
                                    placeholder="请输入手机号码" 
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
                                this.state.passwordVal!=="" && this.state.phoneVal!==""?
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
            </StyleLogin>
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
    phoneInput(e){
        this.setState({
            phoneVal:e.target.value
        })
    }
    async handleShadow(data){
        await this.setState({
            isShow:data
        })
    }
    async handleForgetShadow(data){
        await this.setState({
            isShowForget:data
        })
    }
    handleHideShadow(){
        this.setState({
            isShow:false,
            isShowForget:false
        })
    }
    showForget(){
        this.setState({
            isShowForget:!this.state.isShowForget
        })
    }
    async handleSubmit(){
        // let result= await post(`http://39.106.73.167/login?phonenum=${this.state.phoneVal}&passwd=${this.state.passwordVal}`)
        let result= await post("http://39.106.73.167/login",
        `phonenum=${this.state.phoneVal}&passwd=${this.state.passwordVal}`,
        {"Content-Type":"application/x-www-form-urlencoded"})
        console.log(result)
        if(result.success){
            Toast.success("登录成功!",0.7)
            localStorage.setItem("userInfo",JSON.stringify(result.data))
            sessionStorage.setItem("login",true)
            setTimeout(() => {
                this.props.history.push('/')
            }, 1000);
        }
        else{
            if(result.errorCode === 410){
                Toast.info("该用户不存在!",0.7)
            }
            if(result.errorCode === 420){
                Toast.fail("密码错误!",0.7)
            }
        }
    }
}
