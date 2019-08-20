import styled from 'styled-components'
import ellipsis from 'components/styles/ellipsis.js'

const radius = '50%' 
const StyleMessageItem = styled.li`
    height: .74rem;
    line-height: .42rem;
    width: 100%;
    min-width: 2.7rem;
    color: #d9dce0;
    font-size: .15rem;
    padding: .16rem .225rem .16rem .18rem;
    display: flex;
    &.active{
        background: #f7ffff;
        color: #d9dce0;
    }
    .message-icon-wrap{
        width: .47rem;
        height: .42rem;
        padding: .03rem 0;
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
    .message-text{
        height: .42rem;
        min-width: 1.6rem;
        line-height: .42rem;
        flex:1;
        display: flex;
        text-align: left;
        flex-direction: column;
        justify-content: center;
        h3{
            height: .26rem;
            width: 100%;
            font-size: .18rem;
            line-height: .26rem;
            font-weight: 400;
            color: #303030;
        }
        p{
            height: .16rem;
            width: 100%;
            font-size: .15rem;
            line-height: .16rem;
        }
    }
    .message-time{
        width: .4rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        span{
            height: .14rem;
            line-height: .2rem;
            text-align: right;
        }
        i{
            height: .14rem;
            width: .14rem;
            color: #fff;
            font-size: .15rem;
            line-height: .14rem;
            text-align: center;
            margin: .11rem .03rem 0 0 ;
            display: inline-block;
            background: red;
            border-radius: 50%;            
        }
    }
`
const StyleEllipsis = ellipsis({
    component: "p",
    width: "100%"
})

export{
    StyleMessageItem,
    StyleEllipsis
}