import styled from 'styled-components'
const StyleDisgreeApproval = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    position: relative;
    background: #f7f7f7;
    font-family: 'PingFangSC-Regular', 'PingFang SC Regular', '苹方 常规';
    .area{
      background: #fff;
      width: 278px;
      height: 224px;
      top: 57px;
      left: calc( ( 100% - 278px) / 2 );
      border-radius: 4px;
      position: relative;
      padding: 0 24px;
    }
    .am-list-item{
      margin-top: 6px;
      padding-left: 0;
    }
    .am-textarea-control textarea{
      font-size: 12px;
    }
    .am-textarea-control{
      padding: 0;
    }
    .title{
      height: 22px;
      line-height: 22px;
      font-size: 17px;
      text-align: center;
      color: #303030;
      margin-top: 17px;
    }
    .danger,
    .normal{
      font-size: 9px;
      position: absolute;
      left: 24px;
      bottom: 18px;
      color: #c6c6c6;
    }
    .danger{
      color: #f00;
    }
    .submitButton{
      position: absolute;
      width: 55px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      border-radius: 4px;
      background: #74d4e0;
      font-size: 12px;
      color: #fff;
      right: 18px;
      bottom: 17px;
    }
`
export {
  StyleDisgreeApproval
}