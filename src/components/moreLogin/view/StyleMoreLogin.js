import styled from 'styled-components'

const StyleMoreLogin=styled.div`
z-index:50;
width:100%;
position:absolute;
bottom:0;
>span{
    display:inline-block;
    width:100%;
    text-align:center;
    font-size:0.15rem;
    color:#303030;
    position:absolute;
    bottom:0.3rem;
}
.moreLogin{
    animation-duration:0.5s;
    width:100%;
    position:absolute;
    bottom:0.07rem;
    padding:0 0.1rem;
    aside{
        margin-bottom:0.1rem;
        border-radius:0.13rem;
        background:#fff;
        span{
            display:inline-block;
            width:100%;
            height:0.57rem;
            font-size:0.2rem;
            color:#74d4e0;
            display:flex;
            justify-content:center;
            align-items:center;
            img{
                height:0.22rem;
                width:0.22rem;
                margin-right:0.1rem;
            }
        }
        span:nth-child(1){
            border-bottom:1px solid #f7f7f7;
        }
    }
    >span{
        display:inline-block;
        width:100%;
        height:0.57rem;
        background:#fff;
        border-radius:0.13rem;
        font-size:0.2rem;
        color:#74d4e0;
        display:flex;
        justify-content:center;
        align-items:center;
    }
}
`


export{ StyleMoreLogin
}