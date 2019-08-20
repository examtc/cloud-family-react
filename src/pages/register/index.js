import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import Regist from './register'
import Private from './privates'
import SetPassword from './setPassword'

export default class Colleague extends Component {
    render() {
        return (
                <div style={{width:"100%",height:"100%"}}>
                        <Route path="/register" exact component={Regist}></Route>
                        <Route path="/register/private" exact component={Private}></Route>
                        <Route path="/register/setpassword" exact component={SetPassword}></Route>
                </div>
        )
    }
}
