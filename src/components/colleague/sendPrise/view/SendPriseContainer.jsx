import React, { Component } from 'react'
import pic from 'assets/image/colleague/头像2.png'

import {StyleSendPriseItem} from './StyleSendPrise'

import BScroll from 'better-scroll'
export default class SendPriseContainer extends Component {
    render() {
        return (
            <StyleSendPriseItem className="Mylist">
                <ul>
                {
                    this.props.Sendlist.map(item=>
                        <li>
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
            </StyleSendPriseItem>
        )
    }
    componentDidMount(){
        let scroll = new BScroll('.Mylist',{
            scrollY: true,
            click: true
        })
    }
}
