import React from 'react'
import Submit from 'assets/image/login/角标@2x.png'
import Submit2 from 'assets/image/login/角标拷贝@2x.png'
import { StyleForgetPassword } from './StyleForgetPassword'
import Head from 'components/loginHead'
export default (props) => {
    return(   
        <StyleForgetPassword>
        <Head></Head>
        <span onClick={props.handleBack}>取消</span>
        <main>
        <h2>通过邮箱找回密码</h2>
        <div>
            <form>
                <div className="email">
                    <input 
                        placeholder="请输入注册时填写的邮箱"
                        value={props.emailVal}
                        onChange={props.emailInput}
                    />
                </div>
                <span className="submit">
                {props.emailVal!== "" ?
                    <img 
                        src={Submit} 
                        onClick={props.handleSubmit2}
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
