import React, { Component } from 'react';
import { StyleAccount } from './StyleAccount'
import TopHeader from 'components/topHeader/'
import Option from 'components/option/'

class AccountUI extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <StyleAccount>
                <TopHeader title="账号与安全"></TopHeader>
                <div className="container">
                    <Option text="手机账号" value="18265768775"></Option>
                    <Option text="微信账号" value="已绑定"></Option>
                </div>
                <div className="container">
                <Option text="密码修改" ></Option>
                
                </div>
                <div className="container">
                <Option text="密码保护" ></Option>
                <span>
                通过指纹、手势密码解锁进入云之家
                </span>
                
                </div>
                <div className="container">
                <Option text="设备管理" ></Option>
                
                <span>对登录设备进行安全管理</span>
                </div>
            </StyleAccount>
         );
    }
}
 
export default AccountUI;