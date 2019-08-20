import styled from 'styled-components'
const StyleNoticeItem = styled.div`
  width: calc( 100% - .36rem );
  border-radius: .05rem;
  font-family: 'PingFangSC-Regular', 'PingFang SC Regular', '苹方 常规';
  position: relative;
  background: #FFF;
  margin-left: .16rem;
  margin-top: .18rem;

  .title{
    font-size: .15rem;
    color: #303030;
    float: left;
    margin-left: .1rem;
    margin-top: .1rem;
  }

  .date{
    font-size: .12rem;
    text-align: right;
    color: #c6c6c6;
    padding-top: .12rem;
    padding-right: .1rem;
  }

  .text{
    font-size: .12rem;
    color: #6c6c6c;
    margin: .13rem .1rem .18rem;
  }
`
export {
  StyleNoticeItem
}