import React, { Component } from 'react'

import DynamicUI from './DynamicUI'

import { post } from 'util/http.js'

import { Toast } from 'antd-mobile'

export default class DynamicContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            isShow:false,
            Textvalue:"",
            userID:null
        }
        this.handleHide= this.handleHide.bind(this)
        this.handleBack= this.handleBack.bind(this)
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleHideShadow= this.handleHideShadow.bind(this)
    }
    render() {
        return (
            <DynamicUI
                isShow={this.state.isShow}
                handleBack={this.handleBack}
                Textvalue={this.state.Textvalue}
                handleChange={this.handleChange}
                handleHide={this.handleHide}
                handleSubmit={this.handleSubmit}
                handleHideShadow={this.handleHideShadow}
            >
            </DynamicUI>
        )
    }
    componentDidMount(){
        let result= JSON.parse(localStorage.getItem("userInfo"))
        console.log(result,"1")
        this.setState({
            userID:result.uuid
        })
    }
    handleHide(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    handleBack(){
        this.props.history.goBack()
    }
    handleChange(e){
        this.setState({
            Textvalue:e.target.value
        })
    }
    handleHideShadow(){
        this.setState({
            isShow:false
        })
    }
    async handleSubmit(){
        if(this.state.Textvalue!==""){
            let result= await post("http://39.106.73.167/friendcircle/postareply",
            `repUid=${this.state.userID}&repContent=${this.state.Textvalue}&picture=${this.state.pic}`,
            {"Content-Type":"application/x-www-form-urlencoded"})
            console.log(result)
            if(result.success){
                this.props.history.go(-1)
            }
            else{
                Toast.fail(result.data,0.7)
            }
        }
        else{
            Toast.info("请填写文字",0.5)
        }
    }
}
