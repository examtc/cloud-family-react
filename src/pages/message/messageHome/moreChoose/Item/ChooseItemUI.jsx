import React,{ Component } from 'react'
import {StyleChoose} from './StyleChooseItem'
class ChooseItemUI extends Component {
    render() {
        return (
            <StyleChoose 
                onClick={(e)=>{
                    //改变头部标题，列表信息
                    this.props.updateList(this.props.option)
                    //关闭选择框
                    this.props.clickChoose()
                }}
                >
                <div className="image-icon-div">
                    <img src={this.props.Img} alt=''  className="image-icon"/>
                </div>
                <span>{ this.props.Name }</span>
            </StyleChoose>  
        )
    }
}
export default ChooseItemUI