import React from 'react'
import Head from 'components/loginHead'
import { StyleWechatLogin } from './StyleWechatLogin'
import Logo from 'assets/image/login/logo.png'
import headPic from 'assets/image/login/head.png'
export default (props) => {
        return (
            <StyleWechatLogin>
                <Head></Head>
                <a href="#/login">关闭</a>
                <main>
                    <h2>欢迎来到云之家</h2>
                    <div>
                        <p className="title"><img src={Logo} alt="" />云之家申请使用</p>
                        <p className="info">你的微信头像、昵称、地区和性别信息</p>
                        <div>
                            <span><img src={headPic} alt="" /></span>
                            <aside>
                                <label>用户名</label>
                                <i>修改个人信息</i>
                            </aside>
                        </div>
                    </div>
                    <div className="btn">
                        <span className="agreeBtn">同意</span>
                        <span className="rejectBtn">拒绝</span>
                    </div>
                </main>
            </StyleWechatLogin>
        )
    }
