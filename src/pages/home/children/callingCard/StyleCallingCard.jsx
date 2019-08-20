import styled from 'styled-components'
const StyleCallingCard  = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
    .container{
        flex:1;
        background-color: #f7f7f7;
        display:flex;
        flex-direction:column;
        padding:.17rem;
    }
    .main{
        width:100%;
        flex:1;
        box-shadow: 0 0 .3rem 0 
		rgba(158, 157, 157, 0.27);
        border-radius: .05rem;
    }
    footer{
        height:.49rem;
        display:flex;
        justify-content:center;
        align-items:center;
        background:#fff;
    }
    footer span{
        flex:1;
        text-align:center;
        color: #5fb9c4;
        font-size:.17rem;
    }
    .jx{
        width:.01rem;
        background: #c6c6c6;
        height:.25rem;
    }
    dl{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        
    }
    
    dl dt{
        height:1.4rem;
        border-radius: .05rem .05rem 0 0;
        background:#fff;
        padding: .1rem .17rem;
        display:flex;
        flex-direction:column;
        position: relative;
        overflow:hidden;
    }
    .top{
        flex:1;
        font-size:.16rem;
        
    }
    .top div:last-child{
        transform: scale(0.7);
        top: -.2rem;
        right: -.1rem;
    }
    .bot{
        height:.75rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .bot span{
        display:block;
        font-size:.16rem;
    }
    .bot .tel{
        font-size: .12rem;
    }
    dl dt img{
        height:.39rem;
        width:.39rem;
        position: absolute;
        right:.2rem;
        top:.1rem;
        z-index:10000;
    }
    dl dd{
        flex:1;
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    dl dd span{
        margin-top:.1rem;
        font-size:.12rem;
        color: #c6c6c6;
    }
`
export {
    StyleCallingCard
}