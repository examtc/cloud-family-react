import React from 'react'
import {StyleApproval} from './StyleApproval'

import jiantou from 'assets/image/colleague/jiantou.png'
import ApprovalItemLeft from 'components/home/approvalItemLeft'
import ApprovalItemRight from 'components/home/approvalItemRight'
export default (props) => {
    return(
         <StyleApproval>
                <header>
                    <img src={jiantou} onClick={props.handleBack} alt="" />
                    <span>智能审批</span>
                </header>
                <main>
                    <div className="checkBar">
                        <span className={props.whichItem==="left"? "active" : ""} onClick={props.handleLeft}>我的审批</span>
                        <span className={props.whichItem==="right"? "active" : ""} onClick={props.handleRight}>我发起的</span>
                    </div>
                    {
                        props.whichItem==="left"? <ApprovalItemLeft />: <ApprovalItemRight />
                    }
                </main>
            </StyleApproval>
    )
}