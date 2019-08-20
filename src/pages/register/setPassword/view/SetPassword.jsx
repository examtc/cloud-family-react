import React, { Component } from 'react'
import { post } from 'util/http.js'
import { StylePassword } from './StylePassword'
import Head from 'components/loginHead'
import Show from 'assets/image/login/show.png'
import Eye from 'assets/image/login/eye.png'
import level1 from 'assets/image/login/level1.png'
import level2 from 'assets/image/login/level2.png'
import level3 from 'assets/image/login/level3.png'
import Submit from 'assets/image/login/角标@2x.png'
import Submit2 from 'assets/image/login/角标拷贝@2x.png'
import { Toast } from 'antd-mobile';


export default class SetPassword extends Component {
    constructor(props){
        super(props)
        this.state=({
            showPassword:true,
            passwordVal:"",
            passwordStrength:0,
            phoneVal:""
        })
        this.handleShowpassword= this.handleShowpassword.bind(this)
        this.handlePassword= this.handlePassword.bind(this)
        this.handleNext= this.handleNext.bind(this)
        this.handleBackPre= this.handleBackPre.bind(this)
    }
    render() {
        return (
            <StylePassword>
                <Head></Head>
                <div className="cancle" onClick={this.handleBackPre}>返回</div>
                <main>
                    <h2>请设置密码</h2>
                        <form>
                            <div>
                                <input 
                                    type={ this.state.showPassword ? "password" : "text" } 
                                    value={this.state.passwordVal}
                                    onChange={this.handlePassword}
                                    placeholder="密码不少于8位必须包含数字和字母" />
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
                            { this.state.passwordStrength===1 && 
                            <span><label style={{color:"#ef2b47"}} >弱</label><img src={level1} alt="" /></span> }
                            { this.state.passwordStrength===2 && 
                            <span><label style={{color:"#eda133"}} >一般</label><img src={level2} alt="" /></span> }
                            { this.state.passwordStrength===3 && 
                            <span><label style={{color:"#398e4b"}} >强</label><img src={level3} alt="" /></span> }
                        </p>
                        <span>
                            {
                                this.state.passwordVal!==""?
                                <img src={Submit} onClick={this.handleNext} alt="" />:
                                <img src={Submit2} alt="" />
                            }
                        </span>
                </main>
            </StylePassword>
        )
    }
    componentDidMount(){
        console.log(this.props)
        this.setState({
            phoneVal:this.props.location.search.slice(1,12)
        })
    }
    handleShowpassword(){
        this.setState({
            showPassword:!this.state.showPassword
        })
    }
    handlePassword(e){
        if(e.target.value.match(/^[\d].{7,}$/) || 
           e.target.value.match(/^[a-zA-Z].{7,}$/) ||
           e.target.value.match(/^[@#$%^&].{7,}$/)
           ){
            this.setState({
                passwordStrength:1
            })
        }
        if(e.target.value.match(/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{7,}$/)){
            this.setState({
                passwordStrength:2
            })
        }
        if(e.target.value.match(/^(?=.*[a-zA-Z])(?=.*[1-9])(?=.*[\W]).{7,}$/)){
            this.setState({
                passwordStrength:3
            })
        }
        if(e.target.value.length<8){
            this.setState({
                passwordStrength:0
            })
        }
        this.setState({
            passwordVal:e.target.value
        })
    }
    async handleNext(){
        if(this.state.passwordStrength <=1){
            Toast.info("密码设置不符合规范",1)
        }
        else{
            let result= await post("http://39.106.73.167/register",
            `phonenum=${this.state.phoneVal}&passwd=${this.state.passwordVal}`,
            {"Content-Type":"application/x-www-form-urlencoded"}
            )
            console.log(result)
            if(result.success){
                this.props.history.push('/login')
            }
            else{
                Toast.info(result.data,0.7)
            }
        }
    }
    handleBackPre(){
        this.props.history.go(-1)
    }
}
