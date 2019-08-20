import React, { Component } from 'react';

import {StyleContacts} from './StyleContacts'
import TopHeader from 'components/topHeader/'
import { SearchBar,  List } from 'antd-mobile';
import BScroll from 'better-scroll'
import { getNo } from 'util/http'
import {withRouter} from 'react-router'

import lxr from 'assets/image/contacts/lxr.png'
import zzjg from 'assets/image/contacts/zzjg.png'
import tx1 from 'assets/image/contacts/tx1.png'
import tx2 from 'assets/image/contacts/tx2.png'
import tx3 from 'assets/image/contacts/tx3.png'
import tx4 from 'assets/image/contacts/tx4.png'
import tx5 from 'assets/image/contacts/tx5.png'
import tx6 from 'assets/image/contacts/tx6.png'

const Item = List.Item;

class ContactsUI extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            scroll:"",
            touch:""
         }
    }
    async componentDidMount(){
        // http://39.106.73.167/message/getRelations?
        let result = await getNo('https://api.myjson.com/bins/r672l');
        console.log(result);
        this.setState({
            list:result
        })
        let scroll = new BScroll('.main',{
            scrollY: true,
            click: true
        })
        this.setState({
            scroll
        })
        this.hotpoisition = document.querySelector('#'+result[0].groud).getBoundingClientRect()['y']
        this.alphabetaHeight = document.querySelector('.'+result[0].groud).offsetHeight
        
    }
    
    handleListClick(tag,e){
        this.state.scroll.scrollToElement(document.querySelector(tag))
    }
    handleListTouchStart(e){
        e.stopPropagation()
        this.setState({
            touch:true
        })
        let clientY = e.touches[0].clientY
            let navLetterIndex = Math.floor((clientY - this.hotpoisition) / this.alphabetaHeight)
            this.state.scroll.scrollToElement(`#${this.state.list[ navLetterIndex > 0 ? navLetterIndex-1:0].groud}`)
    }
    handleListTouchMove(e){
    }
    handleListTouchEnd(e){
        this.setState({
            touch:false
        })
    }
    render() { 
        return ( 
            <StyleContacts>
                
                <div className="top">
                    <TopHeader 
                    title="联系人"
                    rightEle={<span style={{ fontSize : ".16rem" }}>添加</span>}
                    rightEvent={() => {
                        this.props.history.push('./searchFriend')
                    }}
                    ></TopHeader>
                    <SearchBar placeholder="搜索" maxLength={8} />
                </div>
                <div className="listOpt">
                        <ul
                        onTouchStart={this.handleListTouchMove.bind(this)}
                        onTouchMove={this.handleListTouchStart.bind(this)}
                        onTouchEnd={this.handleListTouchEnd.bind(this)}
                        >
                        {this.state.list.map((value,index)=>{
                            return (
                                <li key={index} 
                                onClick={this.handleListClick.bind(this,'#'+value.groud)}  
                                className={value.groud}
                                >{value.groud}
                                </li>
                            )
                        })
                    }
                        </ul>
                    </div>
                <div className="main">
                    
                <List >
                    <Item
                    thumb={zzjg}
                    // arrow="horizontal"
                    onClick={() => {}}
                    >组织架构</Item>
                    <Item
                    thumb={lxr}
                    // arrow="horizontal"
                    onClick={() => {}}
                    >手机联系人</Item>
                    <div className="mainContact">
                    {
                        this.state.list.map((value,index)=>{
                        return (
                        <div  className="item" key={index}>
                            <div className="first_name" id={value.groud}>
                                {value.groud}
                            </div>
                            {value.list.map((value) => {
                                return (
                                    <Item
                                    thumb={value.userImage}
                                    // arrow="horizontal"
                                    key={value.userId}
                                    onClick={() => {}}
                                    >{value.userName}</Item>
                                )
                            })}
                            
                           
                        </div>
                        )
                    })
                    }
                    
                    </div>
                    
                    
                </List>
                </div>
                
                
            </StyleContacts>
         );
    }
}
 
export default withRouter(ContactsUI);