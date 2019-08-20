import styled from 'styled-components'

const StyleMessageUI = styled.div`
    height: 100%;
    background: #fff;
    position: relative;
    overflow: scroll; 
    display: flex;
    flex-direction: column;
    .leftDiv{
        height: .44rem;
        width: .3rem;
        position: absolute;
        left:.22rem;        
        background: transparent;
    }
    #addEvent{
        height: .44rem;
        width: .26rem;
        display: inline-block;
    }
`

export {
    StyleMessageUI
}