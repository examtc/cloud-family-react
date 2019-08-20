import React from 'react'
import {StylePrise} from './StylePrise'
import jiantou from 'assets/image/colleague/jiantou.png'
import GetPriseItem from 'components/colleague/getPrise'
import SendPriseItem from 'components/colleague/sendPrise'
export default (props) => {
    return(
         <StylePrise>
                <header>
                    <img src={jiantou} onClick={props.handleBack} alt="" />
                </header>
                <main>
                    <div className="checkBar">
                        <span className={props.whichItem==="left"? "active" : ""} onClick={props.handleLeft}>我收到的赞</span>
                        <span className={props.whichItem==="right"? "active" : ""} onClick={props.handleRight}>我赞过的人</span>
                    </div>
                    {
                        props.whichItem==="left"? <GetPriseItem Getlist={props.Getlist} Sendlist={props.Sendlist} />: <SendPriseItem Sendlist={props.Sendlist} />
                    }
                </main>
            </StylePrise>
    )
}