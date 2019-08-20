import styled from 'styled-components'
const StyleMine=styled.div`
    height: 100%;
    width:100%;
    display:flex;
    flex-direction:column;
    .top{
        height:1.9rem;
        width:100%;
        background:#74d4e0;
        position: relative;
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        overflow:hidden;
    }
    .top .container{
        height:100%;
        width:100%;
        display: flex;
        flex-direction:column;
        justify-content:flex-start;
        padding-top:.15rem;
        align-items:center;
        z-index:10;
        color: #fefefe;
    }
    .top .container h1{
        font-size:.16rem;
    }
    .top .container span{
        font-size:.12rem;
    }
    .top img{
        height: .75rem;
        width: .75rem;
    }
    .circle{
        background: #fff;
        border-radius: 50%;
        width: 105%;
        height: 1rem;
        position: absolute;
        bottom: -.65rem;
    }
    .main{
        flex:1;
        width:100%;
        overflow-y:auto;
        /* display: flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center; */
    }
    main{
        width:100%;
    }
    main .topHeader{
        display: flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        width:100%;
        height:1rem;
    }
    main .topHeader span{
        position: relative;
        width: .66rem;
        height: .165rem;
        background-color: #f7f7f7;
        border-radius: .85rem;
        color: #c6c6c6;
        font-size:.12rem;
        padding-left:.2rem;
        margin-bottom:.2rem;
    }
    main .topHeader span img{
        width: .3rem;
        position: absolute;
        left: -.03rem;
        top: -.06rem;
        
    }
    .topHeader ul{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .topHeader ul li{
        display: flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        color: #6c6c6c;
        height: .425rem;
        line-height:1em;
        font-size:.12rem
    }
    .topHeader ul li img{
        width:.3rem;
        margin-bottom:.1rem;
    }
    .list{
        padding: 0 .175rem;
       margin-top:.1rem;
       font-size:.16rem
    }
    .list ul{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-top:1px solid #f7f7f7;
        
    }
    .list ul li{
        width:100%;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    .list ul li span{
        flex:1;
        text-align:left;
        padding-left:.1rem;
    }
    .list ul li img{
        width:.34rem;
        height:.34rem;
    }
    footer{
        /* position:absolute; */
        /* bottom:0; */
        width:100%;
    }
    footer .button{
        text-align:center;
        height:.45rem;
	    background-color: #f7f7f7;
        line-height:.45rem;
        font-size:.16rem;
        color: #ff2d2d;
    }
    footer .text{
        text-align:center;
        height:.45rem;
        line-height:.45rem;
        font-size:.12rem;
        color: #c6c6c6;
    }
    footer .text b{
        color: #39b5fd;
    }
    .PY{
        margin-right:-.1rem;
    }
`
export{
    StyleMine
}