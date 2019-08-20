import styled from 'styled-components'

const StyledNoTracesMessage  = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    .hidden{
        display: none;
    }
    .mainContent{
        text-align: center;
        padding: 0 .2rem;
    }
    .messageTime{
        height: .2rem;
        background: #fff;
        color: #f00;
    }
    .noTracesMessage{
        margin-top: .32rem;
        font-size: .18rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: .22rem;
        color: #303030;
    }
`

export {
    StyledNoTracesMessage
}