import styled from 'styled-components'
const StyleGuide = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-direction: column;
  font-family: 'PingFangSC-Regular', 'PingFang SC Regular', '苹方 常规';
  position: relative;
  .firstGuide{
    height: 100%;
    background:#fff;
    padding-top: 0;
    position: absolute;
    z-index: 1200;
    width: 100%;

    .gothrow{
      display: block;
      position: absolute;
      height: 22px;
      line-height: 22px;
      color: #303030;
      font-size: 15px;
      top: 38px;
      left: 17px;
    }

    .swiperContainer{
      width: 100%;
      position: absolute;
      top: calc( 50% - 160px );
      height: 303px;

      .swiper{
        width: 100%;

        >div{
          text-align: center;

          .slide-text{
            display: block;
            width: 100%;
            height: 22px;
            line-height: 22px;
            font-size: 18px;
            text-align: center;
            color: #303030;
            position: absolute;
            bottom: 0;
          }
        }
      }
    }

    .swiper-pagination{
      width: 54px;
      height: 4px;
      position: absolute;
      left: calc( ( 100% - 48px) / 2 );
      top: calc( 50% + 190px );

      .swiper-pagination-bullet{
        display: block;
        float: left;
        width: 12px;
        height: 4px;
        background-color: #c6c6c6;
        border-radius: 2px;
        margin: 0 3px;
        opacity: 1;
      }
      .active-slide{
        background: #74d4e0;
      }
    }

    .goon,.go{
      width: 210px;
      height: 42px;
      border-radius: 20px;
      border: solid 1px #74d4e0;
      position: absolute;
      left: calc( ( 100% - 210px ) / 2 );
      top: calc( 50% + 217px );
      line-height: 42px;
      text-align: center;
      font-size: 16px;
      color: #74d4e0;
    }
  }
`
export {
  StyleGuide
}