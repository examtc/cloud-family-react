import styled from 'styled-components'
const StyleMoreChoose = styled.div`
    width: 1.2rem;
    height:1.6rem;
    background: transparent;
    position: absolute;
    right: .18rem;
    top: .25rem;
    z-index: 2000;
    .arrowWrap{
        height: .06rem;
        line-height: .06rem;
        background: transparent;
        text-align: right;
        .arrow{
            width: .06rem ;
            height: .04rem;
            font-size: 0;
            margin-right: .1rem;
            display: inline-block;
            border: .05rem solid transparent;
            border-top: 0;
            border-bottom: .05rem solid #fff;
        }
    }
    .mainChoose{
        width: 1.2rem;
        height: 1.52rem;
        color: #303030;
        font-size: .15rem;
        padding: .06rem 0 .08rem 0;
        box-shadow: 0  0 .03rem #ccc;
        background: #fff;
        border-radius: .04rem ; 
        ul{
            display: flex;
            flex-direction: column;
            justify-content: space-between;          
                
        }
    }
`

  
  export {
    StyleMoreChoose
  }