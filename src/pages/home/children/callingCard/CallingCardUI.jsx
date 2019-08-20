import React, { Component } from 'react';

import QRCode  from 'qrcode.react';
import { StyleCallingCard } from './StyleCallingCard'
import TopHeader from 'components/topHeader/';
import Circle from 'components/circle/CircleContainer'

import head1 from 'assets/img/home/listHead.png'
class CallingCardUI extends Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            userInfo:{}
         }
    }
    componentDidMount(){
        this.setState({
            userInfo: JSON.parse(localStorage.getItem("userInfo")),
        })
      }
    render(){ 
    return (
        <StyleCallingCard>
            <TopHeader
            title="我的名片"
            rightEle={<span style={{fontSize:".15rem"}}>更多</span>}
            // leftEle={<>
            //    <span>hahsd</span>
            //     <span>？？？</span>
            // </>
            // }
    
            >
            </TopHeader>
        <div className="container">
        <div className="main">
            <dl>
                <dt>
                    <div className="top">
                        <span>{this.state.userInfo.loginame}</span>
                        <img src={this.state.userInfo.favpath} alt="" />
                        <Circle style={{}}></Circle>
                    </div>
                    <div className="bot">
                        <span>我的云之家</span>
                        <span className="tel">手机:{this.state.userInfo.phonenum}</span>
                    </div>
                </dt>
                <dd>
                <QRCode
                    value={this.state.userInfo.phonenum || ""}  //value参数为生成二维码的链接
                    size={160} //二维码的宽高尺寸
                    fgColor="#000000"  //二维码的颜色
                    level="H"
                />
                <span>扫一扫加我为外部好友</span>
                </dd>
            </dl>
        
        </div>
        </div>
        <footer>
            <span>
                转发
            </span>
            <div className="jx"></div>
            <span>
                分享到微信
            </span>
        </footer>
        </StyleCallingCard>
    )
}
}
export default CallingCardUI