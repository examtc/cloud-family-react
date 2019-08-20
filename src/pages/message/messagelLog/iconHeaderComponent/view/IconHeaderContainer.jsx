/* 引用说明
<HeaderContainer
    hasBack={false}
//标题与头像互斥
    title="标题"
    imgUrl="头像Url"
    iconName="网名"
    clickChoose="+的回调函数"
></HeaderContainer> 
*/

import React,{ Component } from 'react'
import IconHeaderUI from './IconHeaderUI'
import {withRouter} from 'react-router-dom'
class HeaderContainer extends Component {
    render() {
        return (
            <IconHeaderUI
                {...this.props}
            ></IconHeaderUI>
        )
    }
}
export default withRouter(HeaderContainer)