import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/'

import {
    HashRouter as Router,
    Route, 
    Switch
} from 'react-router-dom'

import Colleague from './pages/colleague'

// import MessageContainer from './pages/message/'
import MessageLogContainer from './pages/message/messagelLog/MessageLogContainer'
import WorkReport from './pages/message/workReport/WorkReportContainer'
import Contacts from './pages/message/contacts/ContactsContainer'
import SearchFriend from './pages/message/searchFriend/SearchFriendContainer'
import WorkReportDetail from './pages/message/workReportDetail/WorkReportContainer'
import Clock from './pages/clock/ClockContainer'
import Reclock from './pages/home/children/resignin/ResigninContainer'
import BusinessTrip from './pages/home/children/businessTrip/BusinessTripContainer'
import AskForLeave from './pages/home/children/askForLeave/AskForLeaveContainer'
import Mime from './pages/home/children/mime/MineContainer'
import Reimbursement from './pages/home/children/reimbursement/ReimbursementContainer'
import CallingCard from './pages/home/children/callingCard/CallingCardContainer'
import MenuLine from './components/home/common/MenuLine'
// import DisagreeApproval from './pages/home/children/myApproval/disagreeApproval/DisagreeApprovalContainer'
// import MyRequest from './pages/home/children/myRequest/MyRequestContainer'
import SettingContainer from 'home/setting/SettingContainer'
import PrivacyUi from './components/home/privacy/PrivacyUi'

import Prise from 'pages/colleague/praise/'
import Approval from 'pages/colleague/approval/'
import Login from 'pages/login/'
import Register from 'pages/register/'
import Dynamic from 'pages/colleague/dynamic/'
import Category from 'pages/home/children/askForLeave/category/CategoryContainer'
import News from 'pages/home/children/news/NewsContainer'
import Account from 'pages/home/children/account/AccountContainer'
import Notification from 'pages/home/children/notification/NotificationContainer'
import Rename from 'home/setting/rename/renameUi'
import Home from './pages/';
import './assets/styles/reset.css'
import './assets/styles/animate.min.css'
import AIApproval from './pages/home/children/AIApproval/AIApprovalContainer'
import DisAIApproval from './pages/home/children/myApproval/disagreeApproval/DisagreeApprovalContainer'
import Notice from './pages/notice/NoticeContainer'
//以下是朱志远测试路由界面
import GroupDetails from './pages/message/groupDetails/GroupDetailsContainer'

import './assets/styles/reset.css'
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router> 
                    {/* <Route path="/message" exact component={MessageContainer}></Route> */}
                    {/* <Redirect from="/" to="/home" exact></Redirect> */}
                    <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/messagelog" exact component = {MessageLogContainer}></Route>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/messagelog/:id" exact component = {MessageLogContainer}></Route>
                    <Route path="/colleague" component={Colleague}></Route>
                    <Route path="/clock" exact component={Clock}></Route>
                    <Route path="/reclock" exact component={Reclock}></Route>
                    <Route path="/businessTrip" exact component={BusinessTrip}></Route>
                    <Route path="/askForLeave" exact component={AskForLeave}></Route>
                    <Route path="/callingCard" exact component={CallingCard}></Route>
                    <Route path="/setting:id" exact component={SettingContainer}></Route>
                    <Route path="/workReportDetail" component={WorkReportDetail}></Route>
                    <Route path="/mime" exact component={Mime}></Route>
                    <Route path="/dynamic" exact component={Dynamic}></Route>
                    <Route path="/prise" exact component={Prise}></Route>
                    <Route path="/approval" exact component={Approval}></Route>
                    <Route path="/category" exact component={Category}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/reimbursement" exact component={Reimbursement}></Route>
                    <Route path="/workReport" exact component={WorkReport}></Route>
                    <Route path="/AIApproval" exact component={AIApproval}></Route>
                    <Route path="/AIApproval/disagree" exact component={DisAIApproval}></Route>
                    <Route path="/notice" exact component={Notice}></Route>
                    <Route path="/news" exact component={News}></Route>
                    <Route path="/setting/rename/:id" exact component={Rename}></Route>
                    <Route path="/privacy" exact component={PrivacyUi}></Route>
                    <Route path="/account" exact component={Account}></Route>
                    <Route path="/notification" exact component={Notification}></Route>
                    <Route path="/contacts" exact component={Contacts}></Route>
                    <Route path="/searchFriend" exact component={SearchFriend}></Route>
                    {/* 以下是朱志远测试路由界面 */}
                    <Route path="/groupDetails" exact component={GroupDetails}></Route>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App
