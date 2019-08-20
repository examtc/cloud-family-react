import styled from 'styled-components'
const StyleRedPacket = styled.div`
  width:100%;
  height:100%;
  flex-direction: column;
  font-family: 'PingFangSC-Regular', 'PingFang SC Regular', '苹方 常规';
  position: absolute;
  background: #f7f7f7;
  top: 0;
  .topBar{
    height: .44rem;
    background: #74d4e0;

    .title{
      position: absolute;
      color: #fff;
      font-size: .18rem;
      line-height: .44rem;
      width: .6rem;
      text-align: center;
      left: calc( ( 100% - .6rem) / 2 )
    }

    .quitButton{
      height: 100%;
      width: .44rem;
      float: right;
      background: url('/images/approval/quit.png') center no-repeat;
      background-size: .15rem .15rem;
    }
  }
`
export {
  StyleRedPacket
}