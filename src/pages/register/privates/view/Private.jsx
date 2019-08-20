import React, { Component } from 'react'

import { StylePrivate } from './StylePrivate.js'
import TopHeader from 'components/topHeader'

export default class Private extends Component {
    render() {
        return (
            <StylePrivate>
                <TopHeader title="隐私政策"></TopHeader>
                <div className="title">
                    深圳云之家网络有限公司隐私政策
                </div>
                <main>
                    深圳云之家网络有限公司（以下简称"云之家"或“我们”）尊重并保护您的隐私。您使用我们的服务时，
                    我们将按照隐私政策（以下简称“本政策”）收集、存储、使用及对外提供您的个人信息。同时，
                    我们会通过本政策向您说明，我们如何为您提供访问、更新、管理和保护您的信息的服务。
                    本政策与您使用我们的服务关系紧密，我们建议您仔细阅读并理解本政策全部内容，做出您认为适当的选择。

                </main>
                <footer>
                    本政策适用于用云之家产品自身的功能及服务（包括即时通讯、通讯录、外部联系人、云之家电话、智能考勤、
                    智能审批、智能会议、工作助手、企业云盘等功能和服务），不适用于其他通过云之家网站或客户端提供的产品（或服务），
                    或任何其他第三方提供的产品（或服务）（以下统称“第三方服务”），您在选择使用第三方服务前应充分了解第三方服务
                    的产品功能及隐私政策。
                </footer>
            </StylePrivate>
        )
    }
}
