import React, { Component } from 'react';
import { RenameStyled } from './renameStyled'
import { withRouter } from 'react-router-dom'
import RenameBack from 'assets/img/setting/rename/rename_back.png'
import ISInput from 'components/home/input/Input'
import PositionUi from 'components/home/position/positionUi'
import BirthdayUi from 'components/home/birthday/BirthdayUi'
import axios from 'axios'

class renameUi extends Component {

    
    
    constructor(props) {
        super(props)
        this.state={
            name: '',
            manID: '',
            content: '',
            title:'',
            date:'',
            str:'',
            Idcard:'',
            isSave: false,
            Pos: '',
            id: ''
        }

    }

    render() {
        let parsm = JSON.parse(this.props.match.params.id)
        console.log(parsm)
        switch (parsm.head) {
            case '姓名':
                this.state.content = <ISInput event={this.Input.bind(this)} Ivalue={parsm.head === '姓名' ? '姓名' : '身份证'}></ISInput>
                break;
            case '身份证':
                this.state.content = <ISInput event={this.Input.bind(this)} Ivalue={parsm.head === '姓名' ? '姓名' : '身份证'}></ISInput>
                break;
            case '职位':
                this.state.content = <PositionUi event={this.position.bind(this)}></PositionUi>
                break;
            case '生日': 
                this.state.content = <BirthdayUi event={this.birthdays.bind(this)}></BirthdayUi>
            default:
                break;
        }

        if(parsm.head === '姓名') {
            this.state.title = '修改'
        } else if (parsm.head === '身份证') {
            this.state.title = '修改'
        } else if (parsm.head === '职位') {
            this.state.title = '我的'
        }

        return (
            <RenameStyled>
                <div className="rename_header">
                    <div className="R_H_img" onClick={this.go.bind(this)}>
                        <img src={RenameBack} alt=""/>
                    </div>
                    <p>{this.state.title}{parsm.head}</p>
                    <p onClick={this.goback.bind(this)}>保存</p>
                </div>
                { this.state.content }
                {
                    // !(this.props.location.state.head === '身份证' && this.state.isSave)  ?
                    // ''
                    // :
                    // <p className="waring">请输入正确的身份证号!!</p>
                    parsm.head === '身份证' ?
                    this.state.isSave ? '' : <p className="waring">请输入正确的身份证号!!</p>
                    :
                    ''
                }
            </RenameStyled>
        );
    }


    goback() {
        if(this.state.date) {
            let msec = new Date(this.state.date).getTime()
            axios({
                url: `http://39.106.73.167/setting/updatep?uuid=${this.state.id}&birthday=${msec}`,
                method: 'post',
            })
            this.props.history.push(`/setting{"date": "${this.state.date}"}`,{ date: this.state.date })
        } else if (this.state.str) {
            axios({
                url: 'http://localhost:8000/data',
                method: 'patch',
                data: {
                    idCard: this.state.str
                }
            })
            this.props.history.push(`/setting{"str": "${this.state.str}"}`,{ idCard: this.state.str })
        } else if (this.state.Idcard) {
            if(this.state.isSave) {
                axios({
                    url: `http://39.106.73.167/setting/updatep?uuid=${this.state.id}&identity=${this.state.Idcard}`,
                    method: 'post',
                })
                this.props.history.push(`/setting{"idCard": "${this.state.Idcard}"}`,{ idCard: this.state.Idcard })
            }
        } else if (this.state.name) {
            axios({
                url: `http://39.106.73.167/setting/updatep?uuid=${this.state.id}&rlname=${this.state.name}`,
                method: 'post',
            })
            this.props.history.push(`/setting{"name": "${this.state.name}"}`,{ username: this.state.name })
        } else if (this.state.Pos) {
            axios({
                url: `http://39.106.73.167/setting/updatep?uuid=${this.state.id}&postname=${this.state.Pos}`,
                method: 'post',
            })
            this.props.history.push(`/setting{"Pos": "${this.state.Pos}"}`,{ position: this.state.Pos })
        }
    }

    go() {
        this.props.history.go(-1)
    }

    birthdays(date) {
        this.setState({
            date
        })
    }

    Input(e,id) {
        if(id === 'ID') {
            let reg = /^[1-9][0-7]\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/
            if(reg.test(e.target.value)) {
                this.setState({
                    Idcard: e.target.value,
                    isSave: true
                })
            } else {
                this.setState({
                    isSave: false
                })
            }
        } else {
            this.setState({
                name: e.target.value
            })
        }
    }

    position(e) {
        console.log(1)
        this.setState({
            Pos: e.target.value
        })
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('userInfo'))
        this.setState({
            id: data.uuid
        })
    }

}

export default withRouter(renameUi);