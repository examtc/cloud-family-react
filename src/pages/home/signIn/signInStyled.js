import styled from 'styled-components'
import { styleColor } from 'assets/styles/color.js'

const SignInContainer = styled.div`
    margin: .23rem .185rem 0 .24rem;
    span {
        width: .02rem;
        height: .11rem;
        background-color: #959595;
        margin: 0 .085rem;
        display: block;
        margin-top: .03rem;
    }
    div.signInHeader {
        display: flex;
        font-size: .12rem;
        color: #d9dce0;
        font-weight: 600;
    }
    div.signInMore {
        display: flex;
        justify-content: flex-end;
        text-align: left;
        img {
            width: .195rem;
            height: .24rem;
            /* height: 100%; */
        }
    }
    .active {
        color: ${styleColor};
    }
    ul {
        div {
            margin-top: .125rem;
            display: flex;
            flex: 1;
            height: .895rem;
            line-height: .895rem;
            text-align: center;
            color: #d9dce0;
            justify-content: center;
            li {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                div {
                    width: .44rem;
                    height: .44rem;
                    
                    img {
                        width: 100%;
                        height: 100%;
                        
                    }
                }
                p {
                    margin-top: .21rem;
                    line-height: 1;
                    font-size: .12rem;
                    color: #d9dce0;
                }
            }
        }
        img{
            height:.2rem;
            margin:auto;
        }
    }
`

export {
    SignInContainer
}