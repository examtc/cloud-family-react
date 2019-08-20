import React, { Component } from 'react';
import {StyleBussinesTrip} from './StyleBusinessTrip'
import { List, InputItem, DatePicker, } from 'antd-mobile';
import StyleTopHeader from 'components/topHeader/'
import TextAreaControl from 'components/textAreaControl/'

import { get,post } from 'util/http'
import { Toast ,Accordion,Checkbox } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
class ResigninUI extends Component {
    constructor(props) {
        super(props);
      this.state = {
        startDate:"",
        endDate:"",
        day:"",
        hour:"",
        worPlace:"",
        reason:"",
        userInfo:{},
        approver:[],
        set:{},
        data:[],
      }
    }
    async componentDidMount(){
      let res =await get('http://39.106.73.167/autoaudit/alluser');
      
      this.setState({
          userInfo: JSON.parse(localStorage.getItem("userInfo")),
          data:res.data,
          set: new Set(),
      }
      )
      
    }
    async submit(){
      let result = await post(
            "http://39.106.73.167/autoaudit/posttrave",
            {
                "uuid": this.state.userInfo.uuid,
                "worPlace": this.state.worPlace,
                "worBgindate": new Date(this.state.startDate).getTime() ,
                "worEnddate": new Date(this.state.endDate).getTime(),
                "worContext": this.state.reason,
                "auditman":`[${this.state.approver}]`,

              },
        )
        if(result.success){
          Toast.success('提交成功', 1);
      }else{
          Toast.success('提交失败', 1);
      }
    }
    render() { 
        return (  
            <StyleBussinesTrip>
               <StyleTopHeader title="出差">
                   
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
            onChange = {(value) => {
            this.setState({worPlace:value})
            }}
          ><div onClick={() => this.labelFocusInst.focus()}>出差地点</div></InputItem>
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
            ref={el => this.labelFocusInst = el}
            value={this.state.day}
            onChange = {(value) => {
            console.log(value)
            }}
          ><div onClick={() => this.labelFocusInst.focus()}>出差天数</div></InputItem>
        </div>
        <TextAreaControl title="出差事由" change={(value) => {
            this.setState({ reason:value })
        }}></TextAreaControl>
        {/* <InputItem
            // placeholder="click label to focus input"
            ref={el => this.labelFocusInst = el}
            onChange = {(value) => {
            console.log(value)
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
            </StyleBussinesTrip>
        );
    }
}
 
export default ResigninUI;