import styled from 'styled-components'
const StylePeople = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'PingFangSC-Regular', 'PingFang SC Regular', '苹方 常规';

  .much{
      height: .45rem;
      width: 100%;
      background: #fff;
      padding: .12rem;
      margin-top: .2rem;
      position: relative;

      .left, .num, .right, .count{
          display: inline-block;
          height: .21rem;
          line-height: .21rem;
          color: #303030;
          font-size: .15rem;
      }
      .num, .count{
          text-align: right;
          border: none;
          position: absolute;
          right: .3rem;
      }
      .right{
          position: absolute;
          right: .12rem;
      }
  }

  .counttext{
    color: #c6c6c6;
    font-size: .12rem;
    margin: .02rem 0 .22rem .12rem;
  }

  .text{
      width: 100%;
      height: .6rem;
      margin-top: .15rem;
      background: #fff;
      padding: .12rem;

      .textcon{
          border: none;
          height: .36rem;
          line-height: .36rem;
          color: #6c6c6c;
          font-size: .15rem;
      }
  }

  .money{
      width: 1.62rem;
      margin-top: .30rem;
      margin-left: calc(( 100% - 1.62rem ) / 2);

      .mark{
          display: block;
          float: left;
          color: #303030;
          font-size: .27rem;
          font-weight: 600;
          margin-top: .15rem;
      }
      .pay{
          display: block;
          float: right;
          color: #303030;
          font-size: .4rem;
          font-weight: 600;
          width: 1.35rem;
          text-align: center;
      }
  }
  .button, .buttonno{
      width: 1.5rem;
      height: .4rem;
      border-radius: .04rem;
      line-height: .4rem;
      text-align: center;
      margin-top: 1rem;
      margin-left: calc(( 100% - 1.5rem) / 2);
      color: #fff;
      font-size: .15rem;
  }
  .button{
      background: red;
  }
  .buttonno{
      background: #fdcaca;
  }

  .bottom{
      width: 100%;
      position: absolute;
      bottom: .2rem;
      font-size: .12rem;
      color: #6c6c6c;
      text-align: center;
  }
`
export {
  StylePeople
}