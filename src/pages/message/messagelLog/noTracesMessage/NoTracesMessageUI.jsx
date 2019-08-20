import React,{Component} from 'react'
import {StyledNoTracesMessage} from './StyleNoTracesMessage'
import TopHeader from 'components/topHeader/index'
class NoTracesMessageUI extends Component  {
    render() {
        return (
            <StyledNoTracesMessage>
                <TopHeader
                    left={false}
                    title="无痕消息"
                    rightEle={
                        <span id="addEvent">
                            <img src="../images/approval/quit.png" alt=""  height="17px"/>
                        </span>
                    }
                    rightEvent={this.props.quitOption}                  
                ></TopHeader>
                <div className="mainContent">
                    <div className='messageTime hidden'>
                        {this.props.time}
                        秒后该消息将被永久销毁！！
                    </div>
                    <div className='messageTime '>                        
                        您仅有 5 秒查看时间
                    </div>
                    <div className='noTracesMessage'>
                        {this.props.noTracesMessage}
                    </div>
                </div>
            </StyledNoTracesMessage>
        )
    }
}

export default NoTracesMessageUI