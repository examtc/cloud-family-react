import React, { Component } from 'react'
import PriseUI from './PriseUI'
import { get } from 'util/http.js'
export default class PriseContainer extends Component {
    constructor(props){
        super(props)
        this.state=({
            whichItem:"left",
            lists:[],
            MySendpriseList:[],
            MyGetPriseList:[],
            userId:null
        })
        this.handleLeft= this.handleLeft.bind(this)
        this.handleRight= this.handleRight.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }
    async componentDidMount(){
        let userid=JSON.parse(localStorage.getItem("userInfo"))
        this.setState({
            userId:userid.uuid
        })
            let result= await get('http://39.106.73.167/friendcircle/getareply')
            let Getlist=[]
            let Sendlist=[]
            result.data.forEach(item => {
                    item.uglike.forEach(prise => {
                        if(item.repUid===this.state.userId){
                            Getlist.push(prise.glikeUser)
                        }
                        if(prise.glikeUid===this.state.userId){
                            Sendlist.push(item.repUser)
                        }
                    })
            })
            this.setState({
                MyGetPriseList:Getlist,
                MySendPriseList:Sendlist
            })
    }
    render() {
        return (
            <PriseUI
                handleLeft={this.handleLeft}
                handleRight={this.handleRight}
                whichItem={this.state.whichItem}
                handleBack={this.handleBack}
                Sendlist={this.state.MySendPriseList}
                Getlist={this.state.MyGetPriseList}
            >
            </PriseUI>
        )
    }
    handleLeft(){
        this.setState({
            whichItem:"left"
        })
        console.log(this.state.MyGetPriseList,11111)
        console.log(this.state.MySendPriseList,22222)
    }
    handleRight(){
        this.setState({
            whichItem:"right"
        })
    }
    handleBack(){
        this.props.history.go(-1)
    }
}
