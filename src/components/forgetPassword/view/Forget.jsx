import React, { Component } from 'react'
import { StyleForget } from './StyleForget'
export default class Forget extends Component {
    constructor(props){
        super(props)
        this.state=({
            isShowForget:false
        })
        this.handleChange=this.handleChange.bind(this)
    }
    componentWillReceiveProps(nextProps) {
    //     if (nextProps.isShowForget === false) {
    //         this.setState({
    //             isShowForget:true
    //         })
    //     }
        this.setState({
            isShowForget:nextProps.isShowForget
        })
    }
    render() {
        return (
             <StyleForget>
             {this.state.isShowForget && 
                <div className="animated wobble">
                    <aside>
                        <a href="#/login/forgetpassword?1">
                            通过手机找回密码
                        </a>
                        <a href="#/login/forgetpassword?2">
                            通过邮箱找回密码
                        </a>
                    </aside>
                    <span onClick={this.handleChange}>取消</span>
                </div>}
            </StyleForget>
        )
    }
    handleChange(){
        this.setState({
            isShowForget:false
        })
        this.props.handleForgetShadow(false)
    }
}
