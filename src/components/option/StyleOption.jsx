import styled from 'styled-components'
const StyleOption = styled.div`
    width:100%;
    height:.45rem;
    padding:0 .18rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#fff;
    position: relative;
    .text{
        font-size:.16rem;
        color: #000000;
    }
    .value{
        font-size:.16rem;
        color: #7d8288;
        flex:1;
        text-align:right;
        padding-right:.24rem;
    }
    img{
        width:.32rem;
        position: absolute;
        right:.1rem;
    }
`
export {
    StyleOption
}