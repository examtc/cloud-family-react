import React, { Component } from 'react'

import { StyleRegister } from './StyleRegister'
import MoreLogin from 'components/moreLogin'
import Head from 'components/loginHead'
import Submit from 'assets/image/login/角标@2x.png'
import Submit2 from 'assets/image/login/角标拷贝@2x.png'
import { Icon,Toast } from 'antd-mobile';

import { post } from 'util/http.js'

export default class RegisterContainer extends Component {
    constructor(props){
        super(props)
        this.state=({
            isCheck:false,
            isShow:false,
            phoneVal:"",
            codeVal:""   ,
            daojishi:60,
            isSend:true
        })
        this.handleCheck= this.handleCheck.bind(this)
        this.handleShadow= this.handleShadow.bind(this)
        this.handleHideShadow= this.handleHideShadow.bind(this)
        this.handleGetCode= this.handleGetCode.bind(this)
        this.phoneInput= this.phoneInput.bind(this)
        this.codeInput= this.codeInput.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleBack= this.handleBack.bind(this)
    }
    render() {
        return (
            <StyleRegister>
                <Head></Head>
                {this.state.isShow && <div className="shadow" onClick={this.handleHideShadow}></div>}
                <div className="cancle" onClick={this.handleBack}>取消</div>
                <main>
                    <h2>新用户注册</h2>
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
                            <div className="code">
                                <input 
                                    type="text" 
                                    value={this.state.codeVal}
                                    onChange={this.codeInput}
                                    placeholder="请输入验证码" 
                                    name="" />
                                {
                                    this.state.isSend?
                                    <span onClick={this.handleGetCode}>获取验证码</span>:
                                    <span><i>{this.state.daojishi}</i> 秒后重发</span>
                                }
                            </div>
                            <div className="check">
                                <span onClick={this.handleCheck}>
                                    {
                                        this.state.isCheck &&  <Icon type="check-circle" size="xxs" color="#398E4B" />
                                    }
                                </span>
                                <label>
                                    同意<a href="/register/private">《隐私政策》</a>
                                </label>
                            </div>
                            <span className="submit">
                            {this.state.phoneVal!=="" && this.state.codeVal!==""?
                                <img 
                                    src={Submit} 
                                    onClick={this.handleSubmit}
                                    alt="" />:
                                <img 
                                    src={Submit2} 
                                    alt="" />
                            }
                            </span>
                        </form>
                    </div>
                </main>
                <MoreLogin 
                    handleShadow={this.handleShadow} 
                    isShow={this.state.isShow}
                    handleHideShadow={this.handleHideShadow}
                ></MoreLogin>
            </StyleRegister>
        )
    }
    componentDidMount(){

    }
    handleCheck(){
        this.setState({
            isCheck:!this.state.isCheck
        })
        console.log(typeof(this.state.codeVal))
    }
    async handleShadow(data){
            await this.setState({
                isShow:data
            })
    }
    handleHideShadow(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    async handleGetCode(){
        let reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
        if(reg.test(this.state.phoneVal)){
            let result= await post(
                "http://39.106.73.167/sendMessage",
                `phonenum=${this.state.phoneVal}`,
                {"Content-Type":"application/x-www-form-urlencoded"})
            console.log(result)
            if(result.success){
                this.setState({
                    isSend:false
                })
                var timer=setInterval(() => {
                    this.setState({
                        daojishi:this.state.daojishi-1
                    })
                }, 1000);
                setTimeout(() => {
                    clearInterval(timer)
                    this.setState({
                        daojishi:60,
                        isSend:true
                    })
                }, 60000);
            }
            else{
                Toast.info(`${result.data}`,0.7)
            }
        }
        else{
            Toast.info('手机号码格式不正确', 1);
        }
    }
    phoneInput(e){
        this.setState({
            phoneVal:e.target.value
        })
    }
    codeInput(e){
        this.setState({
            codeVal:e.target.value.toString()
        })
    }
    handleBack(){
        this.props.history.go(-1)
    }
    async handleSubmit(){
        if(!this.state.isCheck){
            Toast.info("请阅读并同意《隐私政策》",1)
        }
        // else{
        //     Toast.loading('Loading...', 0.5, () => {
        //         this.props.history.push(`/register/setpassword?${this.state.phoneVal}`)
        //     });
        // }
        else{
            // let code= toString(this.state.codeVal)
            let result= await post(`http://39.106.73.167/verifySMScode?code=${this.state.codeVal}`)
            if(result.success){
                Toast.loading('Loading...', 0.5, () => {
                    this.props.history.push(`/register/setpassword?${this.state.phoneVal}`)
                });
            }
            else{
                Toast.fail("验证码不正确",0.7)
            }
        }
    }
}
