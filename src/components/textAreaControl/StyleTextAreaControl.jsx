import styled from 'styled-components'


const StyleTextAreaControl=styled.div`
      position: relative;
      margin-top: -.1rem;
    .am-textarea-item{
      height: 105px;
    }
    .danger,
    .normal{
      font-size: 9px;
      position: absolute;
      right: 28px;
      bottom: 8px;
      color: #303030;
    }
    .danger{
      color: red;
    }
    .am-textarea-control textarea{
        color: #888;
    }
`
export {
    StyleTextAreaControl
}