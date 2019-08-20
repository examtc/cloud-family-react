import styled from 'styled-components'
const StyleMyApproval = styled.div`
    display:flex;
    width:100%;
    height:100%;
    flex-direction: column;
    font-family: 'PingFangSC-Regular', 'PingFang SC Regular', '苹方 常规';
    .container{
        height: 100%;
        background:#f7f7f7;
        padding-top: 0;
    }
    .defaultImgCon{
      width: 187px;
      height: 149px;
      margin: calc( ( 100% - 149px ) / 2 ) auto 0;
      background: url("./images/approval/defaultMyApproval.png") center no-repeat;
      background-size: 187px 149px;
    }
    .defaultImg{
      width: 100%;
      height: 100%;
    }
    .defaultTitle{
      width: 187px;
      height: 22px;
      margin: 17px auto 0;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #c6c6c6;
    }
`
export {
  StyleMyApproval
}