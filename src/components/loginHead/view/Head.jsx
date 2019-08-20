import React, { Component } from 'react'

import { StyleHead } from './StyleHead'

export default class Head extends Component {
    render() {
        return (
            <StyleHead>
                <span className="firstCricle"></span>
                <span className="secondCricle"></span>
                <span className="thirdCricle"></span>
                <span className="lastCricle"></span>
            </StyleHead>
        )
    }
}
