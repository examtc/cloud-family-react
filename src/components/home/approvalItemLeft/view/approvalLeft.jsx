import React, { Component } from 'react'
import pic from 'assets/image/colleague/头像.png'

import {StyleApprovalLeft} from './StyleApprovalLeft'

import BScroll from 'better-scroll'
export default class ApprovalItemLeft extends Component {
    render() {
        return (
            <StyleApprovalLeft className="Mylist">
                <ul>
                    <li>
                        <span>
                            <img src={pic} alt="" />
                        </span>
                        <aside>
                            <h3>我的请假</h3>
                            <label>已审核</label>
                        </aside>
                        <div>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </li>
                </ul>
            </StyleApprovalLeft>
        )
    }
    componentDidMount(){
        let scroll = new BScroll('.Mylist',{
            scrollY: true,
            click: true
        })
    }
}
