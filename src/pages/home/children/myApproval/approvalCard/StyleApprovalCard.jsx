import styled from 'styled-components'
const StyleApprovalCard = styled.div`
    display:flex;
    width: 100%;
    flex-direction: column;
    position: relative;
    padding: 23px 0 0 23px;
    font-family: 'PingFangSC-Regular', 'PingFang SC Regular', '苹方 常规';
    :last-child{
      margin-bottom: 44px;
    }
    .cardImgContainer{
      position: absolute;
      top: 23px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: #aaa;
    }
    .cardName{
      position: absolute;
      left: 66px;
      top: 23px;
      line-height: 22px;
      font-size: 17px;
      color: #303030;
    }
    .cardItem{
        position: absolute;
        left: 66px;
        top: 50px;
        width: 230px;
	      background: #ffffff;
	      border-radius: 4px;
        padding: 8px;
        padding-left: 22px;
    }
    .textSpan {
      height: 22px;
      display: block;
      line-height: 22px;
      font-size: 15px;
      color: #303030;
      margin: 3px 0;
    }
    .button,
    .danger,
    .success,
    .warning{
      bottom: -35px;
      font-weight: 800;
      background: linear-gradient(to bottom,#74d4e0 0,#00d4e0 100%);
      color: #fff;
      position: absolute;
      width: 100%;
      left: 0;
      height: 35px;
      line-height: 35px;
	    border-bottom-left-radius: 4px;
	    border-bottom-right-radius: 4px;
    }
    .button span{
      display: block;
      float: left;
      width: 50%;
      height: 35px;
      border-radius: 4px;
      line-height: 35px;
      text-align: center;
      font-weight: 300;
      color: #fff;
      font-size: 15px;
      :last-child{
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    .danger{
      background: linear-gradient(to bottom,#d9534f 0,#c12e2a 100%);
    }
    .danger span,
    .success span,
    .warning span{
      display: block;
      float: left;
      width: 100%;
      height: 35px;
      border-radius: 4px;
      line-height: 35px;
      text-align: center;
      font-weight: 300;
      color: #fff;
      font-size: 15px;
    }
    .success{
      background: linear-gradient(to bottom,#5cb85c 0,#419641 100%);
    }
    .warning{
      background: linear-gradient(to bottom,#f0ad4e 0,#eb9316 100%);
    }

`
export {
  StyleApprovalCard
}
