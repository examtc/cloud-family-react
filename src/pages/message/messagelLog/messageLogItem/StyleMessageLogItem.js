import styled from 'styled-components'
let radius = "50%"
const StyleMessageLogItem = styled.div`
    &.onleft{
        margin-bottom: .32rem ; 
        overflow: hidden;
        flex-direction: row;
        .content-main{
            line-height: .2rem;
            margin: 0 .89rem 0 0;
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            .noTracesMessage{
                padding: .1rem;
                padding-left: 0;
                img {
                    width: 1.45rem;
                    height: .77rem;
                }
            }
            .messge-text{
                max-width: calc(100% - .37rem);  
                display: inline-block;
                border: 1px solid #d9ced0;
                word-break:break-all;
                padding: .1rem;
                border-radius: .1rem;
                background: #fff;
            }
            .unreadstyle{
                width: .37rem;
                padding-left: .02rem
                span{
                    display: inline-block;
                    width: .74rem;
                    height: .2rem;
                    line-height: .2rem;
                    font-family: PingFangSC-Thin;
                    font-size: .18rem;
                    color: #5fb9c4;
                    transform: scale(.5);
                    transform-origin:0 0;
                }
            }
        }
    }        
    margin-bottom: .32rem ; 
    color: #000;
    background: #fff;
    display: flex;
    overflow: hidden;
    flex-direction: row-reverse;
    justify-content: flex-end;
    .message-icon-wrap{
        width: .35rem;
        height: .35rem;
        margin: 0 .1rem;
        line-height: .42rem;
        text-align: center;
    }
    .message-icon{
        height: .7rem;
        width: .7rem;
        line-height:.7rem;
        text-align: center;
        border-radius: ${radius};
        overflow: hidden;
        display: inline-block;
        background: #5fb9c4;
        transform: scale(.5);
        transform-origin: 0 0 ;
        .icon-inner{
            height: .7rem;
            width: .7rem;
            background: url('./images/message/message_0019.png') no-repeat;
        }         
    }
    .content-main{
        line-height: .2rem;
        flex: 1;
        margin: 0 0 0 0.89rem;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        .noTracesMessage{
            padding: .1rem;
            padding-right: 0;
                img {
                    width: 1.45rem;
                    height: .77rem;
                }
        }
        .messge-text{
                max-width: calc(100% - .37rem);
                min-width: .29rem;
                min-height: .42rem;  
                padding: .1rem;
                display: inline-block;
                border: 1px solid #c6c6c6;
                word-break:break-all;
                border-radius: .1rem;
                background: #fff;
            }
            .unreadstyle{
                width: .4rem;
                padding-right: .02rem
                span{
                    display: inline-block;
                    width: .74rem;
                    height: .2rem;
                    line-height: .2rem;
                    font-family: PingFangSC-Thin;
                    font-size: .18rem;
                    color: #5fb9c4;
                    transform: scale(.5);
                    transform-origin:0 0;
                }
            }
    }
    .redcolor{
        color: red !important;
    }
    .photo{
        max-width: calc(100% - .37rem);
        min-width: .29rem;
        min-height: .42rem;  
        padding: .05rem;
        display: inline-block;
        border: 1px solid #c6c6c6;
        word-break:break-all;
        border-radius: .1rem;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            max-width: calc(100% - .2rem);
            min-width: .25rem;
        }
    }
    .redRacket{
        max-width: calc(100% - .37rem);
        min-width: .29rem;
        min-height: .42rem;  
        padding: .1rem;
        display: inline-block;
        border: 1px solid #c6c6c6;
        word-break:break-all;
        border-radius: .1rem;
        background: rgba(252, 80, 80, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        background-image:'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=2925088594,1859060917&fm=85&s=58843C725F376A925A7E91CD0200F0E3';
        span{
            color: #fff;
            font-size: .14rem;
        }
    }
    .position{
        max-width: calc(100% - .37rem);
        min-width: .29rem;
        min-height: .42rem;  
        padding: .1rem;
        display: inline-block;
        border: 1px solid #c6c6c6;
        word-break:break-all;
        border-radius: .1rem;
        background: rgba(65, 147, 252, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        background-image:'../../images/inputPanel/message_messageLog_0013.png';
        span{
            color: #fff;
            font-size: .14rem;
        }
    }

`

export {
    StyleMessageLogItem
}