import React, { Component } from 'react'
import { StylePeople } from './StylePeople'

class PeopleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num : '0.00',
            count: 13
        }
        this.handleClick = this.handleClick.bind(this)
    }
    async handleClick() {
        // alert('支付页面')
        await this.props.handleMessageSend({
            messageItemType: "redRacket",
            messageItemInfo: "￥"+this.state.num 
        })
        this.props.closePage()
    }
    handleClick() {
        console.log('支付页面')
        document.getElementsByClassName('num')[0].value = ''
        document.getElementsByClassName('textcon')[0].value = ''
        this.setState({
            num: '0.00'
        })
        this.props.pfn(false)
    }

    componentDidMount() { }

    componentWillReceiveProps(nextProps) { }

    render() {
        return (
            <StylePeople>
                <div className="much">
                    <span className="left">总金额</span>
                    <input type="text" className="num" placeholder="0.00" type="number" onInput={()=>{
                        let value = parseFloat(document.getElementsByClassName('num')[0].value)
                        if(value > 200) {
                            document.getElementsByClassName('num')[0].value = '200.00'
                        } else if(value < 0) {
                            document.getElementsByClassName('num')[0].value = ''
                        } else if((value != 0) && (value.toString().split(".")[1])) {
                            if(value.toString().split(".")[1].length > 2) {
                                document.getElementsByClassName('num')[0].value = value.toFixed(2)
                            }
                        }

                        this.setState({
                            num: parseFloat(document.getElementsByClassName('num')[0].value).toFixed(2)
                        })
                    }}/>
                    <span className="right">元</span>
                </div>
                <div className="much">
                    <span className="left">红包个数</span>
                    <input type="text" className="count" placeholder="填写个数" type="number" onInput={()=>{
                        let value = parseFloat(document.getElementsByClassName('count')[0].value)
                        if(value > this.state.count) {
                            document.getElementsByClassName('count')[0].value = this.state.count
                        }
                    }}/>
                    <span className="right">个</span>
                </div>
                <div className="counttext">本群共{this.state.count}人</div>
                <div className="text">
                    <input type="text" className="textcon" placeholder="恭喜发财，大吉大利"/>
                </div>
                <div className="money">
                    <span className="mark">￥</span>
                    <span className="pay">{isNaN(this.state.num) ? '0.00' : this.state.num}</span>
                </div>
                {this.state.num > 0 ? <div className="button" onClick={this.handleClick = this.handleClick.bind(this)}>塞钱进红包</div> : <div className="buttonno">塞钱进红包</div>}
                <div className="bottom">对方可领取的红包金额为0.01-200元</div>
            </StylePeople>
        )
    }
}

export default PeopleContainer
