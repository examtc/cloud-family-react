import styled from 'styled-components'

const RenameStyled = styled.div`
    width: 100%;
    height: 100%;
    .rename_header {
        height: .44rem;
        display: flex;
        line-height: .44rem;
        justify-content: space-between;
        background: #5fb9c4;
        padding: 0 .195rem 0 .17rem;
        .R_H_img {
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

    .input {
        padding: 0 .205rem 0 .17rem;
        margin-top: .165rem;
    }

    .waring {
        font-size: .12rem;
        color: red;
        padding: 0 0 0 .17rem;
    }
`

export {
    RenameStyled,
}