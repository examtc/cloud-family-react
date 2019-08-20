import React, { Component } from 'react';
import {StyleMine} from './StyleMine'
import TopHeader from 'components/topHeader/'
import {
        withRouter
} from 'react-router'

import head1 from 'assets/img/home/listHead.png'
import xj from 'assets/image/home/mime/xj.png'
import gz from 'assets/image/home/mime/gz.png'
import cc from 'assets/image/home/mime/cc.png'
import gzx from 'assets/image/home/mime/gzx.png'

import sz from 'assets/image/home/mime/sz.png'
import xx from 'assets/image/home/mime/xx.png'
import ys from 'assets/image/home/mime/ys.png'
import zh from 'assets/image/home/mime/zh.png'
import mp from 'assets/image/home/mime/mp.png'
import jt from 'assets/image/home/mime/jt.png'
class MimeUI extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            userInfo:{}

        }
    }
    handleSZClick(){
        this.props.history.push('./settingasd')
    }
    handleMPClick(){
        this.props.history.push('./callingCard')
    }
    handleZHClick(){
        this.props.history.push('./account')
    }
    handleNTClick(){
        this.props.history.push('./notification')
    }
    handlePClick(){
        this.props.history.push('./privacy')
    }
    handleTCClick(){
        localStorage.removeItem('userInfo')
        sessionStorage.removeItem('login')
        this.props.history.push('./login')
    }
    
    onChange(){

    }
    componentDidMount(){
        this.setState({
            userInfo: JSON.parse(localStorage.getItem("userInfo")),
        })
      }
    render() { 
        return ( 
            <StyleMine>
                <TopHeader
                leftEvent={()=>{
                    this.props.history.push('/')
                }}
                // rightEle={<span style={{fontSize:".16rem"}}>提交</span>}
                ></TopHeader>
                <div className="main">
                <div className="top">
                    <div className="container">
                    <img src={this.state.userInfo.favpath || ""} alt="" />
                <h1>{this.state.userInfo.loginame || ""}</h1>
                        <span>敢于向黑暗宣战的人，心里必须充满光明</span>
                    </div>
                    
                    <div className="circle">
                        
                    </div>
                </div>
                <main>
                    <div className="topHeader">
                        <span>
                           <img src={gzx} alt="" /> 工作中
                        </span>
                        <ul>
                            <li>
                            <img src={gz} alt="" /> 
                                工作中
                                </li>
                            <li>
                            <img src={xj} alt="" /> 
                                休假中
                                </li>
                            <li>
                            <img src={cc} alt="" />
                                出差中
                                </li>
                        </ul>
                    </div>
                    <div className="list">
                        <ul>
                            <li onClick={this.handleMPClick.bind(this)}>
                            <img src={mp} alt="" />
                               <span>我的名片</span> 
                               <img className="PY" src={jt} alt="" />
                                </li>
                            <li onClick={this.handleZHClick.bind(this)}>
                            <img src={zh} alt="" />
                            <span>账号与安全</span>
                            <img className="PY" src={jt} alt="" />
                                </li>
                            <li onClick={this.handleNTClick.bind(this)}>
                            <img src={xx} alt="" />
                                <span>新消息通知</span>
                                <img className="PY" src={jt} alt="" />
                                </li>
                            <li onClick={this.handlePClick.bind(this)}>
                            <img src={ys} alt="" />
                                <span>隐私</span>
                                <img className="PY" src={jt} alt="" />
                                </li>
                            <li onClick={this.handleSZClick.bind(this)}>
                            <img src={sz} alt="" />
                                <span>设置</span>
                                <img className="PY" src={jt} alt="" />
                                </li>
                        </ul>
                    </div>
                    <footer>
                    <div className="button" onClick={this.handleTCClick.bind(this)}>
                        退出登录
                    </div>
                    <div className="text">
                    客服热线 <b>400-830-8110</b>
                    </div>
                    </footer>
                    
                </main>
                </div>
               
                
            </StyleMine>
         );
    }
}
 
export default withRouter(MimeUI);