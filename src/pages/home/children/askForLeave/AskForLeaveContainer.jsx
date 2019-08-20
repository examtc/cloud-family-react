import React, { Component } from 'react';
import {StyleAskForLeave} from './StyleAskForLeave'
import { List, InputItem, DatePicker, } from 'antd-mobile';
import StyleTopHeader from 'components/topHeader/'
import {withRouter} from 'react-router';
import TextAreaControl from 'components/textAreaControl/'

import { Toast ,Accordion,Checkbox } from 'antd-mobile';


import { get,post } from 'util/http'

const CheckboxItem = Checkbox.CheckboxItem;

class ResigninUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate:"",
            endDate:"",
            day:"",
            hour:"",
            dep:"",
            pos:"",
            reason:"",
            approver:[],
            set:{},
            category:"",
            userInfo:{},
            reason:"",
            data:[]
          }
    }
   async componentDidMount(){
        console.log(this.props.location.search.split('?')[1])
        this.setState({
          userInfo: JSON.parse(localStorage.getItem("userInfo")),
            ...this.props.history.location.state,
            set: new Set(),
            category:this.props.location.search.split('?')[1]
        })
        let res =await get('http://39.106.73.167/autoaudit/alluser');
        this.setState({
          data:res.data
        })
    }
   async submit(){
    let result = await post(
          "http://39.106.73.167/autoaudit/postleave",
          {

              "uuid": this.state.userInfo.uuid,
              "ltypeId": this.state.category,
              "idworBegindate": new Date(this.state.startDate).getTime() ,
              "worEnddate": new Date(this.state.endDate).getTime(),
              "worContext": this.state.reason,
              "auditman":`[${this.state.approver}]`

            },
      )
      if(result.success){
        Toast.success('提交成功', 1);
    }else{
        Toast.success('提交失败', 1);
    }
  }
    render() { 
        const data = [
          { value: 0, label: '' },
            { value: 1, label: '年休假' },
            { value: 2, label: '调休假' },
            { value: 3, label: '事假' },
            { value: 4, label: '病假' },
            { value: 5, label: '婚假' },
            { value: 6, label: '产假' },
            { value: 7, label: '陪产假' },
            { value: 8, label: '哺乳假' },
            { value: 9, label: '节育假' },
            { value: 10, label: '工伤假' },
            { value: 11, label: '丧假' },
            { value: 12, label: '看护假' },
          ];
        return (  
            <StyleAskForLeave>
               <StyleTopHeader 
               title="请假"
            //    left={false}
            //    rightEle={<span>安徽省多好</span>}
            //    rightEvent={()=>{console.log("我是右边")}}
            leftEvent={() => {
                this.props.history.push("./")
            }}
               >
                  
                    
                </StyleTopHeader>
                <div className="main">
                <div className="container">
                <List 
                // renderHeader={() => 'Whether is controlled'}
                >
          <InputItem
            // placeholder="click label to focus input"
            ref={el => this.labelFocusInst = el}
            value={this.state.userInfo.companys ? this.state.userInfo.companys.compName:""}
            disabled
            onChange = {(value) => {
            console.log(value)
            }}
          ><div onClick={() => this.labelFocusInst.focus()}>所属部门</div></InputItem>
          <InputItem
            // placeholder="click label to focus input"
            value={this.state.userInfo.companys ? this.state.userInfo.departs.depName:""}
            disabled
            ref={el => this.labelFocusInst = el}
            onChange = {(value) => {
            console.log(value)
            }}
          ><div onClick={() => this.labelFocusInst.focus()}>职位</div></InputItem>
        <InputItem
            // placeholder="click label to focus input"
            ref={el => this.labelFocusInst = el}
            value={data[this.state.category ? this.state.category:0].label}
            onFocus = {()=>{this.props.history.push('./category',{...this.state})}}
          ><div onClick={()=>{this.props.history.push('./category',{...this.state})}}>请假类型</div></InputItem>
          <div className="group">
        <DatePicker
          value={this.state.startDate}
          onChange={startDate => {
              this.setState({ startDate })
              console.log(new Date(startDate))
            }}
        >
          <List.Item arrow="horizontal">开始时间</List.Item>
        </DatePicker>
        <DatePicker
         value={this.state.endDate}
         onChange={endDate => {
             this.setState({ 
                 endDate,
                 day:parseInt((endDate-this.state.startDate)/(1000 * 60 * 60 * 24)),
                hour:parseInt(((endDate-this.state.startDate)% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            })
            //  console.log((endDate-this.state.startDate).getDate())
            }}
        >
          <List.Item arrow="horizontal">结束时间</List.Item>
        </DatePicker>
        <InputItem
            // placeholder="click label to focus input"
            value={this.state.day !== "" ? this.state.day+"天":""}
            ref={el => this.labelFocusInst = el}
            onChange = {(value) => {
            console.log(value)
            }}
          ><div onClick={() => this.labelFocusInst.focus()}>请假天数</div></InputItem>
        <InputItem
            // placeholder="click label to focus input"
            value={this.state.hour !== "" ? this.state.hour+"":""}
            ref={el => this.labelFocusInst = el}
            onChange = {(value) => {
            console.log(value)
            }}
          ><div onClick={() => this.labelFocusInst.focus()}>时长(小时)</div></InputItem>
          </div>
        <TextAreaControl 
        title= "请假事由"
        change={(value) => {
            this.setState({
                reason:value
            })
        } }
        ></TextAreaControl>
        {/* <InputItem
            // placeholder="click label to focus input"
            ref={el => this.labelFocusInst = el}
            value={this.state.approver}
            onChange = {(value) => {
                this.setState({
                    approver:value
                })
            }}
          ><div onClick={() => this.labelFocusInst.focus()}>审批人</div></InputItem> */}
          <Accordion  className="my-accordion" onChange={this.onChange}>
            
          <Accordion.Panel header="审批人">
          <List >
        {this.state.data.map(i => (
          <CheckboxItem key={i.uuid} onChange={() => {
            let temp = this.state.set
            if(this.state.set.has(i.uuid)){
              temp.delete(i.uuid)
              this.setState({
                set:temp,
                approver:[...temp]
              })
            }else{
              temp.add(i.uuid)
              this.setState({
                set:temp,
                approver:[...temp]
              })
            }
          }
          }>
            {i.rlname}
          </CheckboxItem>
        ))}
      </List>
          </Accordion.Panel>
          </Accordion>
        </List>
                </div>
                
                </div> 
                <div className="submit" onClick={this.submit.bind(this)}>提交</div>
            </StyleAskForLeave>
        );
    }
}
 
export default withRouter(ResigninUI);