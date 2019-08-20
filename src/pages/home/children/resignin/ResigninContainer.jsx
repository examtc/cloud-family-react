import React, { Component } from 'react';
import {StyleResignin} from './StyleResignin'
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
            userInfo:{},
            content:"",
            approver:[],
            set:{},
            data:[],
          }
          this.handleClick=this.handleClick.bind(this)
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
    async handleClick(){
        console.log(this.state.userInfo)
        let result=await post("http://39.106.73.167/autoaudit/postreplsign",
        {
          "replUid":this.state.userInfo.uuid,
          "idreplDate":this.state.startDate.getTime(),
          "replPlace":"昌平",
          "replContent":this.state.content,
          "auditman":`[${this.state.approver}]`,
      },)
        if(result.success){
            Toast.success('签到成功', 1);
        }else{
            Toast.success('签到失败', 1);
        }
        
    }
    
    render() { 
        return (  
            <StyleResignin>
               <StyleTopHeader title="签到补卡">
                   
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
          <DatePicker
          value={this.state.startDate}
          onChange={startDate => this.setState({ startDate })}
        >
          <List.Item arrow="horizontal">补卡时间</List.Item>
       </DatePicker>
       <div
       className={"asda"}
       onClick= {() => {
        window.wx.openLocation({
          latitude: 40.1225770000, // 纬度，浮点数，范围为90 ~ -90
          longitude: 116.2578140000, // 经度，浮点数，范围为180 ~ -180。
          name: '', // 位置名
          address: '', // 地址详情说明
          scale: 20, // 地图缩放级别,整形值,范围从1~28。默认为最大
          infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
          });
            }}
            >
        <InputItem
            // placeholder="click label to focus input"
            ref={el => this.labelFocusInst = el}
            value="北京市昌平区沙阳路18号"
            disabled
          ><div onClick={() => this.labelFocusInst.focus()}>签到地点</div></InputItem>
          </div>
        <TextAreaControl title="补卡说明" change={(value) => {
          this.setState({
            content:value
          })
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
                <div className="submit" onClick={this.handleClick}>提交</div>
            </StyleResignin>
        );
    }
}
 
export default ResigninUI;