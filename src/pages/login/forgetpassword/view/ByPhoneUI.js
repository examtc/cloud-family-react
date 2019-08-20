import React from 'react'
import { StyleForgetPassword } from './StyleForgetPassword'
import Head from 'components/loginHead'
import Submit from 'assets/image/login/角标@2x.png'
import Submit2 from 'assets/image/login/角标拷贝@2x.png'
export default (props) => {
    return(   
        <StyleForgetPassword>
        <Head></Head>
        <span onClick={props.handleBack}>取消</span>
        <main>
            <h2>忘记密码</h2>
            <div>
                <form>
                    <div className="phone">
                        <span>+86</span>
                        <input 
                            onChange={props.phoneInput}
                            type="text" 
                            value={props.phoneVal} 
                            maxLength="11" 
                            placeholder="请输入手机号码" 
                            name="" />
                    </div>
                    <div className="code">
                        <input 
                            type="text" 
                            value={props.codeVal}
                            onChange={props.codeInput}
                            placeholder="请输入验证码" 
                            name="" />
                        <span onClick={props.handleGetCode}>获取验证码</span>
                    </div>
                    <span className="submit">
                    {props.phoneVal!=="" && props.codeVal!==""?
                        <img 
                            src={Submit} 
                            onClick={props.handleSubmit}
                            alt="" />:
                        <img 
                            src={Submit2} 
                            alt="" />
                    }
                    </span>
                </form>
            </div>
        </main>
    </StyleForgetPassword>
    )
}
