import React, { Component } from 'react';
import StyleSigninContainer from './Stylesignin'
import head1 from 'assets/img/home/listHead.png'
import locImg from 'assets/img/signin/loc.png'
import jx from 'assets/img/signin/jx1.png'
import { Toast } from 'antd-mobile';

import { post } from 'util/http'

class siginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInfo:{},
            time:"",
         }
    }
    formatDate = function (date) { 
        var h = date.getHours();  
        var minute = date.getMinutes();  
        minute = minute < 10 ? ('0' + minute) : minute; 
        return h+':'+minute;  
    }
    async  handleClick(){
        
        let result=await post("http://39.106.73.167/signwork/one",
        {"signUid":this.state.userInfo.uuid,
        "signDate":new Date().getTime(),
       "signPlace":"昌平"}
        ,
        // {"Content-Type":"application/x-www-form-urlencoded"}
        )
        if(result.success){
                Toast.success('签到成功', 1);
        }else{
            Toast.success('签到失败', 1);
        }
        
    }
    componentDidMount(){
        let time=this.formatDate(new Date())
        this.setState({
            userInfo: JSON.parse(localStorage.getItem("userInfo")),
            time
        },()=>{
            console.log(this.state.userInfo)
        }
        )
        
      }
    render() { 
        return (
            <StyleSigninContainer>
                <div className="header">
                <div className="container">
                <img src={this.state.userInfo.favpath} alt="" />
                <div className="detail">
                    <h1>{this.state.userInfo.loginame}</h1>
                    <span>精致是生活的方式之一</span>
                </div>
                </div>
                </div>
                <div className="but">
                    <div className="container">
                    <img src={locImg} alt="" />
                    <img src={jx} alt="" />
                    <div className="signinText" onClick={this.handleClick.bind(this)}>
                        <span>{this.state.time}</span>
                        <span>外勤签到</span>
                    </div>
                    </div>
                
                </div>
            </StyleSigninContainer>
        );
    }
}
 
export default siginContainer;