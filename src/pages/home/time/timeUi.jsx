import React, { Component } from 'react';
import { TimeContainer , TimeLineBorder} from './timeStyled'
import BScroll from 'better-scroll'

class timeUi extends Component {

    constructor(props) {
        super(props)
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()
        
        //大月  1,3,5,7,8,10,12

        const days = (function() {
            let arry = []
            if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                for(let i = 1; i <= 31; i++) {
                    arry.push(i)
                }
                
            } else if(month === 2) {
                if ((year%4===0&&year%100!==100)||year%400===0) {
                    
                    for(let i = 1; i <= 29; i++) {
                        arry.push(i)
                    }
                    
                } else {
                    
                    for(let i = 1; i <= 28; i++) {
                        arry.push(i)
                    }
                    
                }
            } else {
                
                for(let i = 1; i <= 30; i++) {
                    arry.push(i)
                }
                
            }

            return arry;
        })()

        let today = new Date().getDate()
        let id;
        let daysArry = []
        days.forEach((value) => {
            if(today === value) {
                id = value
            }
            daysArry.push(<li key={value} className={ today === value ? 'active' : '' } id={value}>{value}</li>)
        })
        
        
        this.state = {
            daysArry,
            today,
            id
        }
    }

    render() {

        


        return (
            <TimeContainer>
                <div className="time_header">TIME</div>
                <TimeLineBorder></TimeLineBorder>
                <div className="timeDate">
                    <ul>
                        {
                            this.state.daysArry
                        }
                    </ul>
                </div>
            </TimeContainer>
        );
    }

    componentDidMount() {
        this.scroll = new BScroll('.timeDate',{
            scrollX: true,
            click: true,
            bounce: false,
            probeType: 2,
            pullUpLoad: true,
        })
        
        let domele = document.getElementById(this.state.id)
        this.scroll.scrollToElement(domele,'0',true,true)
    }
}

export default timeUi;