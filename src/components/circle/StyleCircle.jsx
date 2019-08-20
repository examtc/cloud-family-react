import styled from 'styled-components'
const StyleCircle = styled.div`
  width: 85px;
  height: 96px;
  position: absolute;
  top: 0;
  right: 0;

  .firstCricle{
    display: block;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    position: absolute;
    right: -11px;
    top: -44px;
    background: rgba(116, 212, 224, .8);
    animation: first 0.6s ease forwards;
  }
  .secondCricle,
  .thirdCricle{
    display: block;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    position: absolute;
    background: rgba(116, 212, 224, .3);
  }
  .secondCricle{
    right: -33px;
    top: 0;
    animation: second 0.8s ease forwards;
  }
  .thirdCricle{
    top: 30px;
    right: -17px;
    animation: third 0.8s ease forwards;
  }
  .lastCricle{
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    background: rgba(116, 212, 224, .3);
    top: 84px;
    right: 62px;
    animation: last 1s ease forwards;
  }

  @keyframes first{
    0% {
      transform: translateY(-52px)
    }
    100% {
      transform: translateY(0)
    }
  }
  @keyframes second{
    0% {
      transform: translateY(-58px)
    }
    100% {
      transform: translateY(0)
    }
  }
  @keyframes third{
    0% {
      transform: translateY(-88px)
    }
    100% {
      transform: translateY(0)
    }
  }
  @keyframes last{
    0% {
      transform: translateY(-96px)
    }
    100% {
      transform: translateY(0)
    }
  }
  
`
export {
  StyleCircle
}