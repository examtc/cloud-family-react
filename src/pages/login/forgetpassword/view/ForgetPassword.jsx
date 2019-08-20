import React, { Component } from 'react'
import ByPhoneUI from './ByPhoneUI'
import ByEmailUI from './ByEmailUI'
import { Toast } from 'antd-mobile';

export default class ForgetPassword extends Component {
    constructor(props){
        super(props)
        this.state=({
            isShow:false,
            phoneVal:"",
            codeVal:"",
            emailVal:""    
        })
        this.handleGetCode= this.handleGetCode.bind(this)
        this.phoneInput= this.phoneInput.bind(this)
        this.codeInput= this.codeInput.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleSubmit2= this.handleSubmit2.bind(this)
        this.handleBack= this.handleBack.bind(this)
        this.emailInput= this.emailInput.bind(this)
    }   
    render() {
        if(this.props.location.search==="?1"){
            return (
                <ByPhoneUI
                    handleBack= {this.handleBack}
                    phoneInput= {this.phoneInput}
                    phoneVal= {this.state.phoneVal}
                    codeVal= {this.state.codeVal}
                    codeInput= {this.codeInput}
                    handleGetCode= {this.handleGetCode}
                    handleSubmit= {this.handleSubmit}
                ></ByPhoneUI>
            )
        }
        else if(this.props.location.search==="?2"){
            return (
                <ByEmailUI
                    emailVal= {this.state.emailVal}
                    emailInput= {this.emailInput}
                    handleBack= {this.handleBack}
                    handleSubmit2= {this.handleSubmit2}
                ></ByEmailUI>
            )
        }
    }
    handleGetCode(){
        let reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
        if(reg.test(this.state.phoneVal)){
            console.log(1)
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
            codeVal:e.target.value
        })
    }
    emailInput(e){
        this.setState({
            emailVal:e.target.value
        })
    }
    handleBack(){
        this.props.history.go(-1)
    }
    handleSubmit(){
        console.log(this.state)
    }
    handleSubmit2(){
       if(this.state.emailVal.match(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)){
          Toast.loading('Loading...', 1, () => {
            console.log('验证成功')
          })
       }
       else{
           Toast.fail("邮箱格式不正确",1)
       }
    }
}
