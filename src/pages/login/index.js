import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import WechatLogin from './wechatLogin'
import MesLogin from './mesLogin'
import ForgetPassword from './forgetpassword'
import Login from './login'
export default class index extends Component {
    render() {
        return (
            
            <div style={{ width: "100%", height: "100%" }}>
                
                <Route path="/login" exact component={Login}></Route>
                <Route path="/login/message"  component={MesLogin}></Route>
                <Route path="/login/wechat"  component={WechatLogin}></Route>
                <Route path="/login/forgetpassword" component={ForgetPassword}></Route>
                
            </div>
        )
    }
}
