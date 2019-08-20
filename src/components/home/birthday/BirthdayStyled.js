import styled from 'styled-components'

const BirthdayStyled = styled.div`
    background: #f7f7f7;
    height: 100%;
    .am-list-body::after {
        background: #fff !important;
    }

    .B_select {
        height: .45rem;
        background: #fff;
        display: flex;
        padding: 0 .18rem 0 .185rem;
        align-items: center;
        margin-top: .1rem;

        >p {
            margin-right: .29rem;
        }

        .B_S_select {
            display: flex;
            align-items: center;
            margin-right: .155rem;

            
            div {
                width: .18rem;
                height: .18rem;
                border-radius: 50%;
                border: .01rem solid #c6c6c6;
                position: relative;
                margin-right: .045rem;
                

                span {
                    width: .09rem;
                    height: .09rem;
                    background: #5fb9c4;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    border-radius: 50%;
                    
                }
            }
        }
    }
`

export {
    BirthdayStyled
}