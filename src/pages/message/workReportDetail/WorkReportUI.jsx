import React, { Component } from 'react';
import {StyleWorkReport} from './StyleWorkReport'
import TopHeader from 'components/topHeader/'
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
                // rightEle={<span style={{fontSize:".16rem"}}>提交</span>}
                ></TopHeader>
                <main>
                <div className="item">
                    <h1>2019年08月01日的日报</h1>
                    <span>提交时间: 2019年08月01日 11:04 星期四</span>
                    <span className="delete">删除</span>
                </div>
                </main>
                
            </StyleWorkReport>
         );
    }
}
 
export default WorkReportUI;