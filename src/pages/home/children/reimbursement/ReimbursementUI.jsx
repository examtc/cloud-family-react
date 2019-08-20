import React, { Component } from 'react';
import {StyleReimbursement} from './StyleReimbursement'
import { List, InputItem, DatePicker, } from 'antd-mobile';
import StyleTopHeader from 'components/topHeader/'
import {withRouter} from 'react-router';
import TextAreaControl from 'components/textAreaControl/'

import { get,post } from 'util/http'
import { Toast ,Accordion,Checkbox } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
class ReimbursementUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate:"",
            endDate:"",
            day:"",
            hour:"",
            dep:"",
            pos:"",
            money:"",
            reason:"",
            approver:"",
            category:"",
            userInfo:{},
            approver:[],
            set:{},
            data:[],
          }
    }
    async submit(){
        let result = await post(
              "http://39.106.73.167/autoaudit/postreim",
              {
                
                  "reimUid": this.state.userInfo.uuid,
                  "ltypeId": this.state.category,
                  "reimAmount":this.state.money,
                  "reimContent": this.state.reason,
                  "whoUid": `[${this.state.approver}]`,
                },
          )
          if(result.success){
            Toast.success('提交成功', 1);
        }else{
            Toast.success('提交失败', 1);
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
    render() { 
        
        return (  
            <StyleReimbursement>
               <StyleTopHeader 
               title="费用报销"
            //    left={false}
            //    rightEle={<span>安徽省多好</span>}
            //    rightEvent={()=>{console.log("我是右边")}}
            
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
            value={this.state.money}
            onChange = {(value) => {
                this.setState({
                    money:value
                })
            }}
          ><div onClick={() => this.labelFocusInst.focus()}>报销金额(元)</div></InputItem>
     
        <div className="jx">
        <TextAreaControl 
        title= "备注"
        change={(value) => {
            this.setState({
                reason:value
            })
        } }
        ></TextAreaControl>
        </div>
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
            </StyleReimbursement>
        );
    }
}
 
export default withRouter(ReimbursementUI);