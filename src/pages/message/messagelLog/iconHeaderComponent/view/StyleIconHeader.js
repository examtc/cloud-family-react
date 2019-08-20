import styled from 'styled-components'
let radius = "50%"
const StyleIconHeader =  styled.div`
        width: 1.5rem;
        height: .44rem;
        margin: 0 .2rem;
        line-height: .44rem;
        text-align: center;
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span{
            color: white;
            height: .26rem;
            line-height: .26rem;
            font-size: .14rem;
            text-align: left;
            vertical-align: baseline;
            flex:1;
        }
    }
    .message-icon{
        height: .26rem;
        width: .26rem;
        line-height:.3rem;
        text-align: center;
        border-radius: 50%;
        margin-right: .05rem;
        overflow: hidden;
        display: inline-block;
        background: #5fb9c4;
        .icon-inner{
            height: .26rem;
            width: .26rem;
            background:no-repeat;
            vertical-align: baseline;
        }         
    }
`
     
export {
    StyleIconHeader
}                  
             
             




