import styled from 'styled-components'

const StyleMessageLog = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .log-main{
        flex: 1;
        width: 100%;
        overflow: hidden;
        position: relative;
        .log-main-wrap{
            min-height: 100%;
            width: 100%;
            text-align: left;
            position: absolute;
            bottom: 0;
        }
        .timeTilt{
            width:100%;
            height: .54rem;
            line-height: .2rem;
            padding-top: .14rem;
            padding-bottom: .2rem;
            text-align: center;
            font-size: .14rem;
            color: #c6c6c6;
        }
    }
    .messageempty{
        width:100%;
        height: .54rem;
        line-height: .2rem;
        padding-top: .14rem;
        padding-bottom: .2rem;
        text-align: center;
        font-size: .14rem;
        color: #c6c6c6;
    }
    .leftDiv{
        height: .44rem;
        width: .3rem;
        position: absolute;
        left:.22rem;        
        background: transparent;
    }

`
export {
    StyleMessageLog
}