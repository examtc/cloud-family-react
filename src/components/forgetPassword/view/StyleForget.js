import styled from 'styled-components'

const StyleForget=styled.div`
width:100%;
position:absolute;
bottom:0.07rem;
padding:0 0.1rem;
z-index:51;
>div{
    aside{
        margin-bottom:0.1rem;
        border-radius:0.13rem;
        background:#fff;
        a{
            display:inline-block;
            width:100%;
            height:0.57rem;
            font-size:0.2rem;
            color:#74d4e0;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        a:nth-child(1){
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
export {
    StyleForget
}