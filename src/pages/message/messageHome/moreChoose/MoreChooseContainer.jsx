import React,{ Component } from 'react'
import MoreChooseUI from './MoreChooseUI'
import {withRouter} from 'react-router-dom'
class MoreChoose extends Component {
    constructor(props) {
        super(props)
        this.state={
            chooseInf: [
                {
                    option:"workReport",
                    Name:"工作汇报",
                    Img:'./images/message/message_moreChoose_0001.png'
                },
                {
                    option:"unReadMessage",
                    Name:"未读消息",
                    Img:'./images/message/message_moreChoose_0002.png'
                },
                {
                    option:"linkMan",
                    Name: "联系人",
                    Img:'./images/message/message_moreChoose_0003.png'
                },
                {
                    option:"talkGroup",
                    Name: "重要群组",
                    Img:'./images/message/message_moreChoose_0004.png'
                }
            ]            
        }
    }

    render() {
        return (
            <MoreChooseUI
                chooseInf={this.state.chooseInf}
                {...this.props}
            ></MoreChooseUI>
        )   
    }
}
export default withRouter(MoreChoose)