import React from 'react'
import {
BrowserRouter as Router,
Route,
Redirect
} from 'react-router-dom'

import Message from 'pages/message/messageHome/MessageContainer'

function MessageIndex() {
    return (
    <>
    <Router>
    {/* <Redirect from="/home/message" to="/home/message" exact></Redirect> */}

    <Route path="/home/message" component={ Message }></Route>
    
    </Router>
    </>
    )
    }
    
    export default MessageIndex;