import styled from 'styled-components'
const StyleAIApproval = styled.div`
    display:flex;
    width:100%;
    height:100%;
    flex-direction: column;
    font-family: 'PingFangSC-Regular', 'PingFang SC Regular', '苹方 常规';

    .topBar{
      height: .44rem;
      background: #74d4e0;

      .oneoftwoButton{
        height: 100%;
        line-height: .44rem;
        width: 50%;
        float: left;

        >span{
          opacity: 1;
          margin-left: .17rem;
          width: .72rem;
          height: .44rem;
          line-height: .44rem;
          display: block;
          float: left;
          color: #fff;
          background: none;
          text-align: center;
        }
        >.activeOne{
          font-size: .18rem;
        }
        >.otherOne{
          font-size: .14rem;
        }
      }

      .quitButton{
        height: 100%;
        width: .44rem;
        float: right;
        background: url('/images/approval/quit.png') center no-repeat;
        background-size: .15rem .15rem;
      }
    }
    .oneoftwo{
      height: 100%;
    }
    .swiper-container{
      height: 100%;
      width: 100%;
    }
`
export {
  StyleAIApproval
}