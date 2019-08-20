import styled from 'styled-components'
const StyleRequestCard = styled.div`
    display:flex;
    width: 100%;
    height: 246px;
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
        width: 232px;
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
    .nopass, .pass, .willpass{
      line-height:22px;
      font-size: 12px;
      color: #f58b8b;
      width: 36px;
      height: 22px;
      text-align:center;
      position: absolute;
      top: 11px;
      right: 12px;
    }
    .pass{
      color: #0f0;
    }
    .willpass{
      color: #74d4e0;
    }

`
export {
  StyleRequestCard
}