import React from 'react'
import { StyleList } from './StyleList'
import zan from '../../../../assets/image/colleague/dianzan.png'
import mess from '../../../../assets/image/colleague/mess.png'
import _ from 'lodash'
export default (props) => {
        return (
            <StyleList>
                {
                    props.friendList.map((item, index3) =>
                        item.repParentid===-1?
                        <div className="item" key={index3}>
                            <div className="userInfo">
                                <span>
                                    <img src={item.repUser.favpath} alt="" />
                                </span>
                                <label>{item.repUser.loginame}</label>
                            </div>
                            <div className="content" onClick={props.hideComment}>
                                <p>{item.repContent}</p>
                                <aside>{
                                    item.repPicture.split(",").map((pics, index) =>
                                        <img src={pics} alt="" key={index} />
                                    )
                                }
                                </aside>
                            </div>
                            <div className="prise">
                                <div className="priseAll">
                                {
                                    _.slice(item.uglike, 0, item.uglike.length).map((prise, index2) =>
                                        <span key={index2}>
                                            <img src={prise.glikeUser.favpath}
                                                alt={prise.glikeUser.rlname}
                                            />
                                        </span>
                                    )
                                }
                                </div>     
                                {
                                    !props.inputShow &&
                                    <div className="priseBtn">
                                        <i onClick={() => { props.prise(item, index3) }}>
                                            <img src={zan} alt="" />
                                        </i>
                                        <i onClick={()=>props.handleComment(item)}>
                                            <img src={mess} alt="" />
                                        </i>
                                    </div>
                                }
                            </div>
                            <div className="times">
                                {new Date(item.repEdittime).toLocaleString()}
                            </div>
                            <div className="pinglun">
                                <p>
                                    <label></label>
                                    <span></span>
                                </p>
                            </div>
                        </div>
                        :
                        null
                    )
                }
            </StyleList>
        )
    }

