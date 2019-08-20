import React, { Component } from 'react'
import pic from 'assets/image/colleague/头像.png'

import {StyleApprovalRight} from './StyleApprovalRight'

import BScroll from 'better-scroll'
export default class ApprovalItemRight extends Component {
    render() {
        return (
            <StyleApprovalRight className="Mylist">
                <ul>
                    <li>
                        <span>
                            <img src={pic} alt="" />
                        </span>
                        <aside>
                            <h3>Tao的请假</h3>
                            <label>未审批</label>
                        </aside>
                        <div>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </li>
                    <li>
                        <span>
                            <img src={pic} alt="" />
                        </span>
                        <aside>
                            <h3>Tao的请假</h3>
                            <label>未审批</label>
                        </aside>
                        <div>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </li>
                    <li>
                        <span>
                            <img src={pic} alt="" />
                        </span>
                        <aside>
                            <h3>Tao的请假</h3>
                            <label>未审批</label>
                        </aside>
                        <div>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </li>
                    <li>
                        <span>
                            <img src={pic} alt="" />
                        </span>
                        <aside>
                            <h3>Tao的请假</h3>
                            <label>未审批</label>
                        </aside>
                        <div>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </li>
                    <li>
                        <span>
                            <img src={pic} alt="" />
                        </span>
                        <aside>
                            <h3>Tao的请假</h3>
                            <label>未审批</label>
                        </aside>
                        <div>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </li>
                </ul>
            </StyleApprovalRight>
        )
    }
    componentDidMount(){
        let scroll = new BScroll('.Mylist',{
            scrollY: true,
            click: true
        })
    }
}
