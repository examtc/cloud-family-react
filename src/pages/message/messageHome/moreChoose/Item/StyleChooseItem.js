import styled from 'styled-components'

const StyleChoose = styled.li`
    padding: 0 .13rem 0 .12rem;
    height: .34rem;
    line-height: .34rem;
    text-align: left;
    &.hovered{
        background: #fffff7;
    }
    .image-icon-div{
        width:.18rem;
        height: .34rem;
        line-height: .34rem;
        text-align: left;
        display: inline-block;
        .image-icon {
            width: .2rem;
            height: .2rem;
        }
    }
    span{
        padding-left: .13rem;
    }
`

export {
    StyleChoose
}