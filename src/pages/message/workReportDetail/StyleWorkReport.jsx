import styled from 'styled-components'

const StyleWorkReport = styled.div`
    height:100%;
    width:100%;
    main{
        height:100%;
        width:100%;  
        padding:0 .175rem;
    }
    .item{
        position: relative;
        height:1rem;
        padding: .24rem 0;
        border-bottom:1px solid #f7f7f7;
    }
    .item span{
       font-size: .12rem;
       font-weight:normal;
       color: #c6c6c6;
    }
    .top{
        height:.82rem;
        display:flex;
        border-bottom:1px solid #f7f7f7;
    }
    .top .left,.right{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .top .left{
        align-items:flex-start;
        flex-direction:column;
    }
     h1{
       font-size: .16rem;
       font-weight:normal;
       color: #303030;
    }
    .top .left span{
       font-size: .12rem;
       font-weight:normal;
       color: #c6c6c6;
    }
     .delete{
         position:absolute;
        display:inline-block;
        width: .48rem;
        height: .2rem;
        border-radius: .1rem;
        border: solid 1px #5fb9c4;
        text-align:center;
        color: #6c6c6c;
        font-size: .12rem;
        margin-right:.05rem;
        right:0rem;
        top: .35rem;
    }
    .text{
        height: 1.62rem;
        padding-top:.2rem;
        border-bottom:1px solid #f7f7f7;
    }
    textarea{
        resize: none;
    }
`
export {
    StyleWorkReport
}