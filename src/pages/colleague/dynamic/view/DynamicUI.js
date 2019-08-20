import React from 'react'

import jiantou from 'assets/image/colleague/jiantou.png'
import ten from 'assets/image/colleague/ten.png'

import {StyleDynamic} from './StyleDynamic'
let handleClickAB = () => {
    window.wx.chooseImage({
        count: 9, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        }
      })
}
let handleClickCA = () => {
    window.wx.chooseImage({
        count: 9, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        }
      })
}
export default (props) => {
    return (
        <StyleDynamic>
            {props.isShow && <div className="shadow" onClick={props.handleHideShadow}></div>}
            <header>
                <img src={jiantou} alt="" onClick={props.handleBack} />
                <span>发动态</span>
                <label onClick={props.handleSubmit}>发表</label>
            </header>
            <main>
                <div>
                    <form action="" method="post" encType="text/plain">
                        <textarea 
                            placeholder="分享点什么......" 
                            name="shareContent" 
                            value={props.Textvalue}
                            onChange={props.handleChange}
                            autoFocus="autofocus"
                        >
                        </textarea>
                    </form>
                    <div className="addMsg" onClick={props.handleHide}>
                        <img src={ten} alt="" />
                    </div>
                </div>
                {props.isShow && 
                <footer className="animated slideInUp">
                    <div>
                        <span onClick={
                            handleClickAB
                        }>相册</span>
                        <span onClick={
                            handleClickCA
                        }>拍照片</span>
                        <span onClick={
                            handleClickAB
                        }>视频</span>
                        <span onClick={
                            handleClickCA
                        }>拍视频</span>
                    </div>
                    <span onClick={props.handleHide}>取消</span>
                </footer>
                }
            </main>
        </StyleDynamic>
    )
}