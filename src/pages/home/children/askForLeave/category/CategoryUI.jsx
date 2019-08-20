import React, { Component } from 'react';
import { List, Radio } from 'antd-mobile';
import TopHeader from 'components/topHeader'
import {withRouter} from 'react-router';
import {StyleCategory} from './StyleCategory'
const RadioItem = Radio.RadioItem;
class CategoryUI extends Component {
  
    constructor(props) {
        super(props);
        this.state = { 
            value: 0
        }
            
    
    }

    onChange = (value) => {
        console.log('checkbox1');
        this.setState({
          value,
        });
      };
      onChange2 = (value) => {
        console.log('checkbox2');
        this.setState({
          value2: value,
        });
      };  
      componentDidMount(){
          console.log(this)
      }
    render(){
        const data = [
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
        const { value } = this.state;
        return(
                <StyleCategory>
                <TopHeader
                title="请假"
                rightEle={<span style={{fontSize:".16rem"}}>保存</span>}
                rightEvent={() => {
                console.log(this)
                console.log("回收")
                this.props.history.push(`./askForLeave?${this.state.value}`,{...this.props.location.state,category:this.state.value})
                }}
                ></TopHeader>
                <List>
                {data.map(i => (
                <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                    {i.label}
                </RadioItem>
                ))}
            </List>
            </StyleCategory>
        )
    }
}
export default withRouter(CategoryUI)