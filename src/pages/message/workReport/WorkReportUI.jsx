import React, { Component } from 'react';
import {StyleWorkReport} from './StyleWorkReport'
import TopHeader from 'components/topHeader/'
import {withRouter} from 'react-router'
class WorkReportUI extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onChange(){

    }
    render() { 
        return ( 
            <StyleWorkReport>
                <TopHeader
                title="工作汇报"
                rightEle={<span style={{fontSize:".16rem"}}>提交</span>}
                rightEvent={() => {
                    console.log(this)
                    this.props.history.push('./WorkReportDetail')
                }}
                ></TopHeader>
                <main>
                <div className="top">
                <div className="left">
                    <h1>日报</h1>
                    <span>2019年08月01日</span>
                </div>
                <div className="right">
                    <span>
                        昨天
                    </span>
                    <span>
                        今天
                    </span>
                    <span>
                        明天
                    </span>
                </div>
                </div>
                <div className="text">
                    <h1>今日工作总结</h1>
                    <textarea name="" id="" cols="46" rows="5" placeholder="请输入"></textarea>
                </div>
                <div className="text">
                    <h1>明日工作计划</h1>
                    <textarea name="" id="" cols="46" rows="5" placeholder="请输入"></textarea>
                </div>
                </main>
                
            </StyleWorkReport>
         );
    }
}
 
export default withRouter(WorkReportUI);