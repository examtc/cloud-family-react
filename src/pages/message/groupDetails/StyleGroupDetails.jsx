import styled from 'styled-components'
const GroupDetailsContainer = styled.div`
  background: #f7f7f7;
  height: 100%;

  .line-1px{
    width: 200%;
    height: 1px;
    background: #f7f7f7;
    transform: scale(.5);
  }

  .headList{
    height: .7rem;
    background: #fff;

    >ul{
      height: 100%;
      display: flex;
      align-items: center;

      >li {
        height: .4rem;
        width: 20%;

        .headItem{
          display: block;
          height: 100%;
          width: .4rem;
          margin: 0 calc(( 100% - .4rem) / 2);
          border-radius: 50%;
        }
        :nth-child(1){
          background: url('/images/listHead/listHead.png') no-repeat center;
          background-size: .4rem .4rem;
        }
        :nth-child(2){
          background: url('/images/listHead/listHead0.png') no-repeat center;
          background-size: .4rem .4rem;
        }
        :nth-child(3){
          background: url('/images/listHead/listHead1.png') no-repeat center;
          background-size: .4rem .4rem;
        }
        :nth-child(4){
          background: url('/images/listHead/listHead2.png') no-repeat center;
          background-size: .4rem .4rem;
        }
        .addItem{
          border: .01rem solid #c6c6c6;
          display: flex;
          align-items: center;
          justify-content: center;

          .addIcon{
            height: .17rem;
            width: .17rem;
            position: relative;
            display: block;

            .oneLine{
              display: block;
              height: 100%;
              width: .02rem;
              background: #c6c6c6;
              position: absolute;
              left: calc(( 100% - .02rem ) / 2);            }

            .twoLine{
              display: block;
              height: .02rem;
              width: 100%;
              background: #c6c6c6;
              position: absolute;
              top: calc(( 100% - .02rem ) / 2);
            }
          }
        }
      }
    }
  }

  .ofPeople, .ofMine, .buttonContainer{
    margin-top: .06rem;
    background: #fff;
    
    .ofName{
      width: 100%;
      height: .45rem;
      padding: 0 .15rem;
  
      .title{
        line-height: .45rem;
        color: #000;
        font-size: .16rem;
      }
  
      .text{
        text-align: right;
        color: #303030;
        font-size: .16rem;
        float: right;
        line-height: .45rem;
        border: none;
      }
    }
  }

  .buttonContainer{
    .clearMessage, .deleteExit{
      height: .45rem;
      width: 100%;
      line-height: .45rem;
      text-align: center;
      color: #ff2d2d;
      font-size: .16rem;
    }
  }
`

export {
  GroupDetailsContainer
}