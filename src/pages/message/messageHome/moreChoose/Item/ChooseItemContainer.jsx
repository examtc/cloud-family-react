import React,{ Component } from 'react'
import ChooseItemUI from './ChooseItemUI'
class ChooseItem extends Component {
     render() {
        return (
            <ChooseItemUI
                {...this.props}
            ></ChooseItemUI>       
        )    
    } 
}
export default ChooseItem