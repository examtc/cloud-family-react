import React, { Component } from 'react';
import { ListContainer as ListStyled } from './ListStyled'
import BScroll from 'better-scroll'
import MyLink from '../../../components/home/common/MyLink'
import checkIn from 'assets/img/home/checkIn.jpeg'
import businessTrip from 'assets/img/home/businessTrip.jpeg'
import checkInCard from 'assets/img/home/checkInCard.jpeg'
import Leave from 'assets/img/home/Leave.jpeg'
import Reimbursement from 'assets/img/home/Reimbursement.jpeg'
import smartApproval from 'assets/img/home/smartApproval.jpeg'

class ListUi extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            y: 0
        }
    }
    
    render() {
        const content = [
            {text:'签到',y:0,yy:45,yyy:0,id:'HomeList1'},
            {text:'智能审批',y:46,yy:260,yyy:-154,id:'HomeList2'},
            {text:'签到补卡',y:261,yy:482,yyy:-367,id:'HomeList3'},
            {text:'费用报销',y:483,yy:699,yyy:-583,id:'HomeList4'},
            {text:'出差',y:700,yy:900,yyy:-799,id:'HomeList5'},
            {text:'请假',y:901,yy:947,yyy:-947,id:'HomeList6'}
        ]
        let ListDom = [];
        content.forEach((value,index) => {
            let istrue = Math.abs(this.state.y) >= value.y && Math.abs(this.state.y) <= value.yy
            ListDom.push(<li key={value.text} id={value.id} className={ istrue ? 'active' : ''} onClick={this.handelClass.bind(this,value.yyy)} >{value.text}</li>)
        })
        
        return (
            <ListStyled>
                <ul className="List">
                    {ListDom}
                </ul>
                <div id="ListContent">
                    <ul className="ListContent" id="LC">
                        <MyLink url="/clock" exact>
                            <div></div>
                            <img src={checkIn} alt=""/>
                        </MyLink>
                        <MyLink url="/AIApproval" exact>
                            <div></div>
                            <img src={smartApproval} alt=""/>
                        </MyLink>
                        <MyLink url="/reclock" exact>
                            <div></div>
                            <img src={checkInCard} alt=""/>
                        </MyLink>
                        <MyLink url="/reimbursement" exact>
                            <div></div>
                            <img src={Reimbursement} alt=""/>
                         </MyLink>
                        <MyLink url="/businessTrip" exact>
                            <div></div>
                            <img src={businessTrip} alt=""/>
                        </MyLink>
                        <MyLink url="/askForLeave" exact>
                            <div></div>
                            <img src={Leave} alt=""/>
                        </MyLink>
                    </ul>
                </div>
            </ListStyled>
        );
    }

    handelClass(num) {
        let time = '700'
        this.scroll.scrollTo(num,0,time)
        this.setState({
            y: Math.abs(num)
        })
        
        // let domel = document.getElementById(el)
        // console.log(this.scroll.scrollToElement)
        // this.scroll.scrollToElement(domel,'1000',true,true)
    }

    componentDidMount() {
        let that = this;
        that.scroll = new BScroll('#ListContent',{
            scrollX: true,
            click: true,
            bounce: false,
            probeType: 2,
            pullUpLoad: true,
        })
        that.scroll.on('scroll',function() {
            that.setState({
                y: this.x
            })
        })
    }
    
}

export default ListUi;
