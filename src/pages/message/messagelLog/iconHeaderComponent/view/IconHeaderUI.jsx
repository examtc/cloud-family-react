import React, {Component} from 'react'
import { StyleIconHeader } from  './StyleIconHeader'


class HeaderUI extends Component {
    render() {
        return (
            <StyleIconHeader>
                {
                this.props.imgUrl &&
                <div className="message-icon" >
                    <img className="icon-inner"
                        src={this.props.imgUrl} 
                        // src='./images/message/message_0019.png'
                        alt=""
                />
                </div>
                }
                    <span>
                        {this.props.iconName}
                    </span>       
            </StyleIconHeader>
        )
    }
}
export default HeaderUI