import React,{ Component } from 'react'
import ChooseItem from './Item/ChooseItemContainer';
import {StyleMoreChoose } from './StyleMoreChoose'
class MoreChooseUI extends Component {
    render() {
        return (
            <StyleMoreChoose>
                <div className='arrowWrap'>
                    <span className="arrow"></span>
                </div> 
                <div className="mainChoose">
                        {
                            this.props.chooseInf.map((value,index)=>{
                                return (                  
                                    <ChooseItem   
                                        {...this.props}                              
                                        {...value}
                                        key={"choose" + value.option}
                                    ></ChooseItem>
                                )
                            })
                        }
                </div>
            </StyleMoreChoose>
        )
    }
}
export default MoreChooseUI