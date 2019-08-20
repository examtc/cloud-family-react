import React,{Component} from 'react'
import  NoTracesMessageUI from './NoTracesMessageUI'
class NoTracesMessageContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: 5,
            noTracesMessage: this.props.NoTracesMessage
        }
        this.quitOption = this.quitOption.bind(this)
    }
    componentDidMount() {
        this.timerInterval = setInterval(() => {
            this.setState({
                time: this.state.time -1
            })
        }, 1000);
    }
    //退出页面
    quitOption() {
        // this.setState({
        //     noTracesMessage:''
        // })
        this.props.noTracesToEmpty()
    }
    componentWillUnmount() {
        clearInterval(this.timerInterval)
    }
    render() {
        return (
            <NoTracesMessageUI
                {...this.state}
                quitOption={this.quitOption}
            ></NoTracesMessageUI>
        )
    }
}
export default NoTracesMessageContainer