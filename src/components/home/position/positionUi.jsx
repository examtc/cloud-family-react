import React, { Component } from 'react';
import { PositionStyled } from './positionStyled'

class positionUi extends Component {
    render() {
        return (
            <PositionStyled>
                <input type="text" onChange={e => this.props.event(e)}/>
            </PositionStyled>
        );
    }
}

export default positionUi;