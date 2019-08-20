import React from 'react'
// 引入图片
import back from '../../../../assets/image/colleague/back.png'
import more from '../../../../assets/image/colleague/more.png'
import fabu from '../../../../assets/image/colleague/fabu.png'
import zan from '../../../../assets/image/colleague/dianzan.png'
import { StyledArea } from './StyleArea'
import Item from 'components/colleague/list'
export default (props) => {
    // const isShow= this.state.isShow;
    return (
        <StyledArea>
            {props.scrollToHead ?
                <div className="header">
                    <img
                        src={more}
                        alt=""
                        style={{
                            position: "absolute",
                            top: "0.24rem",
                            right: "0.29rem",
                            height: "0.17rem",
                            width: "0.17rem"
                        }}
                        onClick={props.handleChangeShow}
                    />
                    {props.isShow &&
                        <div className="hideMenu">
                            <span></span>
                            <ul>
                                <li onClick={props.handleGoNext}>
                                    <img src={fabu} alt=""></img>
                                    <label>发布</label>
                                </li>
                                <li onClick={props.handlePrise}>
                                    <img src={zan} alt=""></img>
                                    <label>赞</label>
                                </li>
                            </ul>
                        </div>
                    }
                </div> :
                <div className="header2">
                    <span>同事圈</span>
                </div>
            }
            <div className="bodys">
                <div className="main">
                    <span>
                        <img src={back} alt="" />
                    </span>
                    <div className="list">
                        <Item 
                            friendList={props.friendList}
                            handleComment={props.handleComment}
                            prise={props.prise}
                            hideComment={props.hideComment}
                        ></Item>
                    </div>
                </div>
            </div>
            {props.inputShow &&
                <div className="comment">
                    <input
                        type="text"
                        name=""
                        onChange={(e)=>props.inputChange(e)}
                        value={props.inputVal}
                    />
                    <label onClick={props.sendComment}>发送</label>
                </div>
            }
        </StyledArea>
    )
}