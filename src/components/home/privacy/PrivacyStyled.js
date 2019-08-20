import styled from 'styled-components'

const PrivacyStyled = styled.div`
    .rename_header {
        height: .38rem;
        display: flex;
        line-height: .38rem;
        justify-content: center;
        background: #5fb9c4;
        padding: 0 .195rem 0 .17rem;
        position: relative;
        .R_H_img {
            position: absolute;
            left: .17rem;
            width: .11rem;
            height: .17rem;
            img {
                width: 100%;
                height: 100%;
            }
        }

        p {
            color: #fff;
        }

        p:nth-of-type(1) {
            font-size: .18rem;
        }

        p:nth-of-type(2) {
            font-size: .15rem;
        }
    }

    .P_text {
        line-height: 1;
        padding: .08rem .215rem .15rem .185rem !important;
    }
`

export {
    PrivacyStyled
}