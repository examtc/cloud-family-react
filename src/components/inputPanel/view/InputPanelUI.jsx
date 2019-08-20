import React,{ Component } from 'react'
import {StyleInputPanel} from './StyleInputPanel'
class InputPanelUI extends Component {
    
    render() {
        return (
            <StyleInputPanel>
                <div className="inputPlace">
                    <div className="voice"><span></span></div>
                    <div className="inputwrap">
                        <input type="text"  
                            placeholder={this.props.isNoTraces ? '发送无痕消息' : ''}
                            value={this.props.inputMessageText}
                            onChange={(e)=>{
                                this.props.inputMessageEvent(e.target.value)
                            }}
                            onKeyUp={(e)=>{this.props.callEnterEvent(e)}}
                        />
                    </div>
                    {
                        this.props.showButton 
                        ?   <div 
                                className="sendBtn"
                                onTouchStart={this.props.callBack}                     
                            >发送</div>
                        :   <div className="emojiBtn">
                                <div className="emoji"><span></span></div>
                                <div 
                                    className="addother" 
                                    onClick={this.props.showBottomPanel}
                                >
                                    <span></span>
                                </div>
                            </div>                    
                    }                    
                </div>                                   
                <div 
                    className={this.props.isShowBottomPanel ? 'bottomPlace'  : 'bottomPlace  hiddenStyle' }>
                    {
                        this.props.inputOther.map((value,index)=>
                            (
                                <div 
                                    className="otherItem" 
                                    key={value.id}
                                    onClick={()=>{this.props.clickItem(value.name)}}
                                >
                                    <img src={value.itemImgUrl} alt=""/>    
                                    <span>{value.itemName}</span>
                                </div>  
                            )
                        )
                    }             
                </div>
            </StyleInputPanel>
        )
    }
}
export default InputPanelUI