import React, { Component } from 'react';
import { InputBorder } from './inputStyled'

class Input extends Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div className="input">
                    <InputBorder>
                        {
                            this.props.Ivalue === '身份证' ?
                            <input type="text" onChange={e => this.props.event(e,'ID')} autoFocus/>
                            :
                            <input type="text" onChange={e => this.props.event(e)} autoFocus/>
                        }
                    </InputBorder>
                    
            </div>
        );
    }
}

export default Input;