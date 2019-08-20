import React, { Component } from 'react';

import {StyleNews} from './StyleNews'
import { withRouter } from 'react-router'

import newsBg from 'assets/image/home/newsBg.png'
import close from 'assets/image/home/close.png'
class NewsUI extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show:true
         }
    }
    handlClick(){
        this.props.history.push('./news')
    }
    ifShow(e){
        e.stopPropagation();
        this.setState({
            show:false
        })
    }
    render() { 
        return ( 
           !this.state.show ||<StyleNews>
                <div className="title">新闻动态</div>
                <div className="news" onClick={this.handlClick.bind(this)}>
                <img src={newsBg} alt="" />
                <div className="data">
                    <span>每日心灵捕手</span>
                    <span>4分钟前</span>
                    <img className="close" onClick={this.ifShow.bind(this)} src={close} alt="" />
                </div>
                </div>
                <div className="white"></div>
            </StyleNews>
         );
    }
}
 
export default withRouter(NewsUI);