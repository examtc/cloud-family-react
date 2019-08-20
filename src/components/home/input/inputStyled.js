import styled from 'styled-components'
import border from 'components/styles/border'

const RenameBorder = styled.div``

const InputBorder = styled(border({
    component:RenameBorder,
    borderWidth: '0 0 1px 0',
    borderColor:'#f7f7f7'
}))`
    
    width: 100%;
    input {
        width: 100%;
        height: .25rem;
        line-height: .25rem;
        border: 0;
        font-size: .12rem;
        color: #c6c6c6;
        background: #fff;
    }
`


export {
    InputBorder
}