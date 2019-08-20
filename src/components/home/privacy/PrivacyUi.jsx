import React, { Component } from 'react';
import { PrivacyStyled } from './PrivacyStyled'
import SlideUi from 'components/slide/slideUi'
import TopHeader from 'components/topHeader/'
import { get, post } from 'util/http'

class PrivacyUi extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isFriend: '',
            verification: '',
            isdata: '',
            id: ''
        }
    }

    render() {

        console.log(this.state)

        return (
            <PrivacyStyled>
                <TopHeader title="隐私"></TopHeader>
                {
                    this.state.isdata 
                    ? 
                    <SlideUi head='允许他人添加我为好友' text='若关闭以上选项，不允许他人添加你为好友，对方将无法通过二维码、名片或手机号添加你' isSlide={{isTrue: this.state.isFriend}} event={this.addstatus.bind(this)}></SlideUi>
                    :
                    ''
                }
                {
                    this.state.isdata
                    ?
                    <SlideUi head='加我为好友时需验证' isSlide={{isTrue: this.state.verification}} event={this.verifystatus.bind(this)}></SlideUi>
                    :
                    ''
                }
            </PrivacyStyled>
        );
    }

    go() {
        this.props.history.go(-1)
    }

    addstatus(is) {
        is = is ? 1 : 0
        post(`http://39.106.73.167/setting/updatestatus`, {uuid: this.state.id, addstatus: is})
    }

    verifystatus(is) {
        is = is ? 1 : 0
        post(`http://39.106.73.167/setting/updatestatus`, {uuid: this.state.id, verifystatus: is})
    }

    async componentDidMount() {
        let data = JSON.parse(localStorage.getItem('userInfo'))
        this.setState({
            id: data.uuid
        })
        let result = await get(`http://39.106.73.167/setting/querystatus?uuid=${data.uuid}`)

        setTimeout(() => {
            this.setState({
                isdata: true,
                isFriend: Boolean(result.data.addstatus),
                verification: Boolean(result.data.verifystatus)
            })
        })
    }
}

export default PrivacyUi;