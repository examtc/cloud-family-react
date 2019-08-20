import styled from 'styled-components'

const StylePrise =styled.div`
height:100%;
width:100%;
background:#fff;
header{
    height:0.44rem;
    padding:0 0.17rem;
    background:#5FB9C4;
    display:flex;
    align-items:center;
    img{
        height:0.2rem;
        width:0.12rem;
    }
}
main{
    height:100%;
    padding:0 0.22rem;
    .checkBar{
        height:0.28rem;
        width:100%;
        margin:0.2rem 0;
        span{
            display:inline-block;
            font-size: 0.16rem;
            font-weight: normal;
            font-stretch: normal;
            color: #303030;
            padding-bottom:0.05rem;
            margin-right:0.3rem;
        }
        .active{
            border-bottom:2px solid #74d4e0;
        }
    }
}
`

export {
    StylePrise
}