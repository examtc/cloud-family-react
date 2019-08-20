import styled from 'styled-components'

const SlideStyled = styled.div`
    .checkbox {
        background: ${props => (props.bak ? '#5fb9c4' : '')} !important;
    }
    .am-list-content {
        font-size: .16rem !important;
    }
    
    .P_text {
        padding: 0 .215rem 0 .185rem;
        font-size: .12rem;
        color: #c6c6c6;
        background: #F7F7F7;
    }
    .am-list-body::after {
        height: 0 !important;
    }
    .am-list-body::before {
        height: 0 !important;
    }
    .am-list-line::after {
        height: 0 !important;
    }
`

export {
    SlideStyled
}