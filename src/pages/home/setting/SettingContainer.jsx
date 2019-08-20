import React, { Component } from 'react';
import SettingUi from './SettingUi'
import { connect } from 'react-redux'
import { asyncSettingData } from './reducer/actionCreator'

const mapState = state => ({
    list: state.setting.list
})

const mapDispatch = dispatch => ({
    SettingData: dispatch(asyncSettingData())
})

class SettingContainer extends Component {
    render() {
        return (
            <SettingUi list={this.props.list}></SettingUi>
        );
    }
}

export default connect(mapState,mapDispatch)(SettingContainer);