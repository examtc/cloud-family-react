import React, { Component } from 'react'
import { StylePerson } from './StylePerson'

class PersonContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num : '0.00'
        }
        this.handleClick = this.handleClick.bind(this)
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
            <StylePerson>
                <div className="much">
                    <span className="left">单个金额</span>
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
                <div className="text">
                    <input type="text" className="textcon" placeholder="恭喜发财，大吉大利"/>
                </div>
                <div className="money">
                    <span className="mark">￥</span>
                    <span className="pay">{isNaN(this.state.num) ? '0.00' : this.state.num}</span>
                </div>
                {this.state.num>0 ? <div className="button" onClick={this.handleClick = this.handleClick.bind(this)}>塞钱进红包</div> : <div className="buttonno">塞钱进红包</div>}
                <div className="bottom">对方可领取的红包金额为0.01-200元</div>
            </StylePerson>
        )
    }
}

export default PersonContainer
