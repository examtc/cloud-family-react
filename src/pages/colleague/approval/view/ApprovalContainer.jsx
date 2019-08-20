import React, { Component } from 'react'
import ApprovalUI from './ApprovalUI'

export default class Approval extends Component {
    constructor(props){
        super(props)
        this.state=({
            whichItem:"left"
        })
        this.handleLeft= this.handleLeft.bind(this)
        this.handleRight= this.handleRight.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }
    render() {
        return (
            <ApprovalUI
                handleLeft={this.handleLeft}
                handleRight={this.handleRight}
                whichItem={this.state.whichItem}
                handleBack={this.handleBack}
            >
            </ApprovalUI>
        )
    }
    handleLeft(){
        this.setState({
            whichItem:"left"
        })
        console.log(this.state.whichItem)
    }
    handleRight(){
        this.setState({
            whichItem:"right"
        })
        console.log(this.state.whichItem)
    }
    handleBack(){
        console.log("返回上一级了")
    }
}
