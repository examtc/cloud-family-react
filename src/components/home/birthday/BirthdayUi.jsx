import React, { Component } from 'react';
import { BirthdayStyled } from './BirthdayStyled'
import { DatePicker, List } from 'antd-mobile';


const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}



// If not using `List.Item` as children
// The `onClick / extra` props need to be processed within the component


class BirthdayUi extends Component {

    constructor(props) {
        super(props)

        this.state={
            select: true,
            select2: false,
        }
    }

    
    state = {
        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
        date1: now
      }

    render() {
        return (
            <BirthdayStyled>
                <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                    
                    <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date}
                    onChange={date => {
                        
                        let day = new Date(date).getDate()
                        if(day < 10){
                            day = '0' + day
                        }
                        let month = new Date(date).getMonth() + 1
                        if(month < 10) {
                            month = '0' + month
                        }
                        let year = new Date(date).getFullYear()
                        this.props.event(year + '-' + month + '-' + day)
                        return this.setState({ date })
                    }}
                    >
                    <List.Item arrow="horizontal">公历生日</List.Item>
                    </DatePicker>

                    <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date1}
                    onChange={date1 => {

                        let day = new Date(date1).getDate()
                        if(day < 10){
                            day = '0' + day
                        }
                        let month = new Date(date1).getMonth() + 1
                        if(month < 10) {
                            month = '0' + month
                        }
                        let year = new Date(date1).getFullYear()
                        this.props.event(year + '-' + month + '-' + day)
                        return this.setState({ date1 })
                    }}
                    >
                    <List.Item arrow="horizontal">农历生日</List.Item>
                    </DatePicker>

                    
                </List>

                <div className="B_select">
                    <p>我平时习惯过的是</p>
                    <div className="B_S_select">
                        <div onClick={this.public.bind(this)}>
                            {
                                this.state.select ? 
                                <span></span>
                                : ''
                            }
                        </div>
                        <p>公历生日</p>
                    </div>
                    <div className="B_S_select">
                        <div onClick={this.private.bind(this)}>
                            {
                                this.state.select2 ? 
                                <span></span>
                                : ''
                            }
                        </div>
                        <p>农历生日</p>
                    </div>
                </div>
            </BirthdayStyled>
        );
    }

    public() {
        

        if(this.state.select === false && this.state.select2 === true) {
            this.setState({
                select: true
            })
            this.setState({
                select2: false
            })
        }
    }

    private() {
        

        if (this.state.select2 === false && this.state.select === true) {
            this.setState({
                select2: true
            })
            this.setState({
                select: false
            })
        }
    }

    submit() {
        
    }

    static getDerivedStateFromProps() {
        if(this) {
            console.log(1)
            
        }

        return {
            save: ''
        }
    }


    
    
}

export default BirthdayUi;