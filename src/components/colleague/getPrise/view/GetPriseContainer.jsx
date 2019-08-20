import React, { Component } from 'react'
import pic from 'assets/image/colleague/头像.png'

import {StyleGetPriseItem} from './StyleGetPrise'

import BScroll from 'better-scroll'
import Item from 'antd-mobile/lib/popover/Item';
export default class GetPriseContainer extends Component {
    constructor(props){
        super(props)
        this.state=({
        })
    }
    render() {
        console.log(this.props)
        return (
            <StyleGetPriseItem className="Mylist">
                <ul>
                    {
                        this.props.Getlist.map((item,index)=>
                            <li key={index}>
                            <span>
                                <img src={item.favpath} alt="" />
                            </span>
                            <aside>
                                <h3>{item.loginame}</h3>
                            </aside>
                            </li>
                            
                        )
                    }
                </ul>
            </StyleGetPriseItem>
        )
    }
    componentDidMount(){
        let scroll = new BScroll('.Mylist',{
            scrollY: true,
            click: true
        })
    }
}
