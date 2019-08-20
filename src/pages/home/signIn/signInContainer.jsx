import React, { Component } from 'react';
import SignInUi from './signInUi'
import { connect } from 'react-redux'
import { asyncSiginData } from './reducer/actionCreator'

const mapState = state => ({
    list: state.sigin.list
})

const mapDispatch = dispatch => ({
    SiginData: dispatch(asyncSiginData())
})
class signInContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }

    render() {
        console.log(this.props)
        return (
            this.state.data ?
            <SignInUi list = {this.state.data}></SignInUi>
            :
            ''
        );
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.list) {
            this.setState({
                data: nextProps.list.data
            })
        }
        
        
    }

}


export default connect(mapState,mapDispatch)(signInContainer);