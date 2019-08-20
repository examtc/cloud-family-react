import styled from 'styled-components'

const StyleMessageList = styled.div`
    flex:1;
    overflow: hidden;
    >ul{
        display:flex;
        flex-direction: column;
        padding-top: .135rem;
        height: max-content;
    }
    .noWords{
        color: rgb(174,176,181);
        font-size: .14rem;
    }
`

export {
    StyleMessageList
}