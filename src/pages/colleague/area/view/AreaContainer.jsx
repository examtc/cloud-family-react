import React, { Component } from 'react'
import { get, post } from 'util/http.js'
import { Toast } from 'antd-mobile'
import { getAction,priseAction } from '../../actionCreact'
import {
    withRouter
  } from 'react-router-dom'

import _ from 'lodash'

import AreaUI from './AreaUI'
import store from 'store/index'
class Area extends Component {
    constructor(props) {
        super(props)
        this.state={
            isShow:false,
            scrollToHead:true,
            inputShow:false,
            commentVal:"",
            userID:null,
            pageindex:1,
            userInfo:{},
            lists:store.getState().colleague,
            inputVal:"",
            whichId:null,
        }
        store.subscribe(()=>{
            this.setState({
                lists:store.getState().colleague
            })
        })
        this.handleChangeShow=this.handleChangeShow.bind(this)
        this.handleGoNext= this.handleGoNext.bind(this)
        this.handlePrise= this.handlePrise.bind(this)
        this.prise= this.prise.bind(this)
        this.handleComment= this.handleComment.bind(this)
        this.hideComment= this.hideComment.bind(this)
        this.sendComment= this.sendComment.bind(this)
        this.inputChange= this.inputChange.bind(this)
    }
    async componentDidMount(){
        let container= document.querySelector(".bodys")
        container.onscroll = async ()=> {
                if(container.scrollTop>=323){
                    this.setState({
                        scrollToHead:false
                    })
                }
                if(container.scrollTop<323){
                    this.setState({
                        scrollToHead:true
                    })
                }
                if(container.scrollTop+container.clientHeight===container.scrollHeight){
                        Toast.info("没有更多了",0.5)
                }
        }
        let user= JSON.parse(localStorage.getItem("userInfo"))
        if(user){
            this.setState({
                userID:user.uuid,
                userInfo:user
            })
        }
        setTimeout(async () => {
            let result= await get(`http://39.106.73.167/friendcircle/getareply?repUid=${this.state.userID}&pageindex=${this.state.pageindex}&pagesize=5`)
            const action= getAction(result)
            store.dispatch(action)
        }, 1);
    }
    render() {
        // const isShow= this.state.isShow;
        return (
            <AreaUI
                isShow={this.state.isShow}
                inputShow={this.state.inputShow}
                scrollToHead={this.state.scrollToHead}
                friendList={this.state.lists.list}
                handleChangeShow={this.handleChangeShow}
                handleGoNext={this.handleGoNext}
                handlePrise={this.handlePrise}
                handleComment={this.handleComment}
                prise={this.prise}
                hideComment={this.hideComment}
                sendComment={this.sendComment}
                inputChange={this.inputChange}
                inputVal={this.state.inputVal}
            >
            </AreaUI>
        )
    }
    handleChangeShow(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    handleGoNext(){
        this.props.history.push('/dynamic')
    }
    handlePrise(){
        this.props.history.push('/prise')
        console.log(1)
    }
    handleComment(item){
        this.setState({
            inputShow:true,
            whichId:item.repId
        })
    }
    hideComment(){
        this.setState({
            inputShow:false
        })
    }
    async prise(item,index){
        let result= await post("http://39.106.73.167/friendcircle/postglike",
            `glikeUid=${this.state.userID}&glikeRepid=${item.repId}`,
            {"Content-Type":"application/x-www-form-urlencoded"}
        )
        if(result.success){
            const data={
                index:index,
                value:{
                    glikeUser:{
                        favpath:this.state.userInfo.favpath
                    }
                }
            }
            const action= priseAction(data)
            store.dispatch(action)
        }
        else{
            Toast.info("您已经赞过了",0.5)
        }
    }
    inputChange(e){
        this.setState({
            inputVal:e.target.value
        })
    }
    async sendComment(){
        let result= await post(
            "http://39.106.73.167/friendcircle/showcontext",
            `repUid=${this.state.userID}&repId=${this.state.whichId}&repContent=${this.state.inputVal}`,
            {"Content-Type":"application/x-www-form-urlencoded"}
            )
        this.setState({
            inputVal:""
        })
    }
}

export default withRouter(Area)