import styled from 'styled-components'
import headerImg from '../../../assets/img/home/head.png'

const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 0 0.2rem 0 0.23rem;
    font-size: 0.18rem;
    font-weight: 500;
    justify-content: space-between;
    margin-top: .1rem;
    div.header_text {
        line-height: 0.2rem;
        width: 1.155rem;
    }
    div.header_img {
        align-self: flex-start;
        background: url(${props => props.img}) no-repeat center;
        width: .44rem;
        height: .44rem;
        border-radius: 50%;
        background-size: 100%;
    }
`

export {
    HeaderContainer
}