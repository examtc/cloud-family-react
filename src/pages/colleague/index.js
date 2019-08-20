import React, { Component } from 'react'

// import { Route } from 'react-router-dom'
import Area from './area/'

export default class Colleague extends Component {
    render() {
        return (
                <div style={{width:"100%",height:"100%"}}>
                        {/* <Route path="/colleague" exact component={Area}></Route> */}
                        <Area></Area>
                </div>
        )
    }
}
