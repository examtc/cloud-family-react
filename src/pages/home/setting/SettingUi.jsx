import React, { Component } from 'react';
import { SettingStyled, ButtonBorder, PBorder } from './SettingStyled'
import axios from 'axios'
import back from 'assets/img/setting/back.png'
import card from 'assets/img/setting/card.png'
import go from 'assets/img/setting/go.png'
import { DatePicker, List, ActivityIndicator } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import BScroll from 'better-scroll'
// import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

// function formatDate(date) {
//   /* eslint no-confusing-arrow: 0 */
//   const pad = n => n < 10 ? `0${n}` : n;
//   const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
//   const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
//   return `${dateStr} ${timeStr}`;
// }

// If not using `List.Item` as children
// The `onClick / extra` props need to be processed within the component
// const CustomChildren = ({ extra, onClick, children }) => (
//   <div
//     onClick={onClick}
//     style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
//   >
//     {children}
//     <span style={{ float: 'right', color: '#888' }}>{extra}</span>
//   </div>
// );

class SettingUi extends Component {

    constructor(props) {
        super(props)
        this.state={
            name: '小王',
            istrue: false,
            manID: '未设置',
            position: '未设置',
            isSex: false,
            Sex: '',
            birthday: '',
            entrydate: '',
            regulardate: '',
            id: ''
        }

        this.go.bind(this)
    }
    
    state = {
        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
        date1: now,
      }

    render() {
        return (
            <SettingStyled className="bscroll" id="bs">
                {
                    
                    this.state.istrue && this.props.list ? 
                    <div className="S_masking">
                        <div>
                            <p>温馨提示</p>
                            <p>本团队人员信息有管理员维护，不允许修改</p>
                            <ButtonBorder onClick={this.hide.bind(this)}>确定</ButtonBorder>
                        </div>
                    </div> 
                    : 
                    ''
                }
                {

                    this.state.isSex && this.props.list ?
                    <div className="S_sex">
                        <div className="S_sex_cen slideInUp animated">
                            <div>
                                <PBorder onClick={this.changeSex.bind(this,'男')}>男</PBorder>
                                <PBorder onClick={this.changeSex.bind(this,'女')}>女</PBorder>
                                <PBorder onClick={this.changeSex.bind(this,'未设置')}>未设置</PBorder>
                            </div>
                            <button onClick={this.closeSex.bind(this)}>取消</button>
                        </div>
                    </div>
                    :
                    ''
                }
                {
                    this.props.list
                    ? (
                        <div>
                            <div className="mineSetting">
                                <div className="MS_header">
                                    <div onClick={e => this.go(e)}><img src={back} alt=""/></div>
                                    <span>个人设置</span>
                                </div>
                                <div className="MS_headPortrait">
                                    <div className="MS_H_img">
                                        <img src={this.props.list.respones.data.favpath} alt=""/>
                                    </div>
                                    <div className="MS_H_text">
                                        <p>{this.props.list.respones.data.loginame}</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="mineInformation">
                                <div className="M_mine">
                                    <div className="M_M_public" onClick={this.Sex.bind(this)}>
                                        <div className="M_M_P_cen">
                                            <p>性别</p>
                                            
                                            <div className="M_M_P_text">
                                                <p>{this.state.Sex}</p>
                                                <div className="M_M_P_Bimg">
                                                    <img src={go} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="M_M_public" onClick={this.clickRename.bind(this,'生日')}>
                                        <div className="M_M_P_cen">
                                            <p>生日</p>
                                            
                                            <div className="M_M_P_text">
                                                <p>{this.state.birthday}</p>
                                                <div className="M_M_P_Bimg">
                                                    <img src={go} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="M_M_public" onClick={this.businessCard.bind(this)}>
                                        <div className="M_M_P_cen">
                                            <p>名片</p>
                                            
                                            <div className="M_M_P_text">
                                                <div className="M_M_P_Timg">
                                                    <img src={card} alt=""/>
                                                </div>
                                                <div className="M_M_P_Bimg">
                                                    <img src={go} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="M_M_public" onClick={this.clickRename.bind(this,'身份证')}>
                                        <div className="M_M_noBoreder M_M_P_cen">
                                            <p>身份证</p>
                                            
                                            <div className="M_M_P_text">
                                                <p>{this.props.list.respones.data.identity}</p>
                                                <div className="M_M_P_Bimg">
                                                    <img src={go} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="M_company">
                                    <div className="M_M_public" onClick={this.hint.bind(this)}>
                                        <div className="M_M_P_cen">
                                            <p>公司</p>
                                            
                                            <div className="M_M_P_text">
                                                <p>{this.props.list.respones.data.companys.compName}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="M_M_public" onClick={this.clickRename.bind(this,'姓名')}>
                                        <div className="M_M_P_cen">
                                            <p>姓名</p>
                                            
                                            <div className="M_M_P_text">
                                                <p>{this.props.list.respones.data.rlname}</p>
                                                <div className="M_M_P_Bimg">
                                                    <img src={go} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="M_M_public" onClick={this.hint.bind(this)}>
                                        <div className="M_M_P_cen">
                                            <p>部门</p>
                                            
                                            <div className="M_M_P_text">
                                                <p>{this.props.list.respones.data.departs.depName}</p>
                                                <div className="M_M_P_Bimg">
                                                    <img src={go} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="M_M_public" onClick={this.clickRename.bind(this,'职位')}>
                                        <div className="M_M_P_cen">
                                            <p>职位</p>
                                            
                                            <div className="M_M_P_text">
                                                <p>{this.props.list.respones.data.postname}</p>
                                                <div className="M_M_P_Bimg">
                                                    <img src={go} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                    
                                        <DatePicker
                                        mode="date"
                                        title=""
                                        extra={this.state.entrydate}
                                        value={this.state.date}
                                        onChange={date => {
                                            let day = new Date(date).getDate()
                                            if(day < 10){
                                                day = '0' + day
                                            }
                                            let month = new Date(date).getMonth() + 1
                                            if(month < 10) {
                                                month = '0' + month
                                            }
                                            let year = new Date(date).getFullYear()
                                            axios({
                                                url: `http://39.106.73.167/setting/updatep?uuid=${this.state.id}&entrydate=${new Date(year + '-' + month + '-' + day).getTime()}`,
                                                method: 'post',
                                            })
                                            this.setState({
                                                entrydate: year + '-' + month + '-' + day
                                            }) 
                                            this.setState({ date })
                                        }}
                                        >
                                        <List.Item arrow="horizontal">入职日期</List.Item>
                                        </DatePicker>
            
                                        <DatePicker
                                        mode="date"
                                        title=""
                                        extra={this.state.regulardate}
                                        value={this.state.date1}
                                        onChange={date1 => {
                                            let day = new Date(date1).getDate()
                                            if(day < 10){
                                                day = '0' + day
                                            }
                                            let month = new Date(date1).getMonth() + 1
                                            if(month < 10) {
                                                month = '0' + month
                                            }
                                            let year = new Date(date1).getFullYear()
                                            axios({
                                                url: `http://39.106.73.167/setting/updatep?uuid=${this.state.id}&regulardate=${new Date(year + '-' + month + '-' + day).getTime()}`,
                                                method: 'post',
                                            })
                                            this.setState({
                                                regulardate: year + '-' + month + '-' + day
                                            }) 
                                            this.setState({ date1 })
                                        }}
                                        >
                                        <List.Item arrow="horizontal">转正日期</List.Item>
                                        </DatePicker>
                                        
                                    </List>
                                    
                                </div>
                                <div className="M_phone">
                                    <div className="M_M_public" onClick={this.hint.bind(this)}>
                                        <div className="M_M_noBoreder M_M_P_cen">
                                            <p>手机</p>
                                            
                                            <div className="M_M_P_text">
                                                <p>{this.props.list.respones.data.phonenum}</p>
                                                <div className="M_M_P_Bimg">
                                                    <img src={go} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    : (
                        <ActivityIndicator text="正在加载" />
                    )
                }
            </SettingStyled>
        );
    }

    clickRename(head) {
        switch(head) {
            case '姓名' : this.props.history.push(`/setting/rename/${`{"head": "${head}", "name": "${this.state.name}"}`}`,{name: this.state.name , head}) ;break
            case '身份证' : this.props.history.push(`/setting/rename/${`{"head": "${head}", "name": "${this.state.manID}"}`}`,{manID: this.state.manID , head}) ; break
            case '职位' : this.props.history.push(`/setting/rename/${`{"head": "${head}", "name": "${this.state.position}"}`}`,{manID: this.state.position , head}) ; break
            case '生日' : this.props.history.push(`/setting/rename/${`{"head": "${head}", "name": "${this.state.position}"}`}`,{manID: this.state.position , head}) ; break
        }

        
    }

    saveName(name) {
        this.setState({
            name
        })
    }

    go(e) {
        e.stopPropagation()
        this.props.history.push('/mime')
    }

    componentDidMount() {
        console.log(this.props)
        let data = JSON.parse(localStorage.getItem('userInfo'))
        this.setState({
            id: data.uuid
        })
        if(this.props.location.state) {
            this.setState({
                name: this.props.location.state.NewName,
                manID: this.props.location.state.NewManID,
            })
        }
        
        window.onresize = function() {
            let scroll = new BScroll('.bscroll',{
                scrollY: true,
                click: true,
            })
        }

        setTimeout(() => {
            if(this.props.list) {
                this.ymd(this.props.list.respones.data.birthday,(year, month, day) => {
                    this.setState({
                        birthday: year + '-' + month + '-' + day
                    })
                })
                this.ymd(this.props.list.respones.data.entrydate,(year, month, day) => {
                    this.setState({
                        entrydate: year + '-' + month + '-' + day
                    })
                })
                this.ymd(this.props.list.respones.data.regulardate,(year, month, day) => {
                    this.setState({
                        regulardate: year + '-' + month + '-' + day
                    })
                })
    
                this.setState({
                    Sex: this.props.list.respones.data.usex
                })
            }
            
        },500)
        
    }

    ymd(second,cb) {
        let year = this.getTime(second,0)
        let month = this.getTime(second,1)
        let day = this.getTime(second,2)

        cb(year, month, day)
    }

    hint() {
        this.setState({
            istrue: true
        })
    }

    hide() {
        this.setState({
            istrue: false
        })
    }

    Sex() {
        this.setState({
            isSex: true
        })
    }

    closeSex() {
        this.setState({
            isSex: false
        })
    }

    changeSex(str) {
        axios({
            url: `http://39.106.73.167/setting/updatep?uuid=${this.state.id}&usex=${str}`,
            method: 'post',
            headers: {"Content-Type":"application/x-www-form-urlencoded"},
        }).then(() => {
            this.setState({
                Sex: str
            })
        })

        
        this.setState({
            isSex: false
        })
    }

    businessCard() {
        this.props.history.push('/callingCard')
    }

    

    componentWillReceiveProps(nextProps) {
        console.log(this.props)
        if(this.props.match.params.id !== 'asd') {
            let param = JSON.parse(this.props.match.params.id)
            if(param.date) {
                nextProps.list.respones.data.birthday = param.date
                this.setState({
                    birthday: param.date
                })
            } else if (param.idCard) {
                nextProps.list.respones.data.identity = param.idCard
            } else if (param.str) {
                nextProps.list.respones.data.rlname = param.str
            } else if (param.Pos) {
                nextProps.list.respones.data.postname = param.Pos
            }
            
        }
        setTimeout(() => {
            let a = new BScroll('.bscroll',{
                scrollY: true,
                click: true,
            })  
        })
    }

    getTime(second,getDateType) {
        let date =new Date(second);
        if(getDateType==0){
          return date.getFullYear();
        }else if(getDateType==1){
          if((date.getMonth()+1)<=9){
            return "0"+(date.getMonth()+1);
          }else {
            return date.getMonth()+1;
          }
        }else if(getDateType==2){
          if(date.getDate()<=9){
            return "0"+date.getDate();
          }else {
            return date.getDate();
          }
        }else if(getDateType==3){
          if(date.getHours()<=9){
            return "0"+date.getHours();
          }else {
            return date.getHours();
          }
        }else if(getDateType==4){
          if(date.getMinutes()<=9){
            return "0"+date.getMinutes();
          }else {
            return date.getMinutes();
          }
        }else if(getDateType==5){
          return date.getSeconds ();
        }
      }
        
}

export default withRouter(SettingUi);