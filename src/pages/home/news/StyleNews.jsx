import styled from 'styled-components'

const StyleNews = styled.div`
    padding: .1rem .23rem 0 .31rem;
    .title{
        font-size: .18rem;
        color: #303030;
        padding-bottom:.16rem;
    }
    .news{
        width:100%;
        display:flex;
        flex-direction:column;
    }
    .news img{
        width:100%;
    }
    .news .data{
        position:relative;
        padding-top:.05rem;
    }
    .news .data span{
        color: #c6c6c6;
        font-size:.12rem;
        padding-right:.21rem;
    }
    .close{
        position:absolute;
        right: 0;
        top:.1rem;
        height: .08rem;
        width:.08rem !important;
    }
    .white{
        height:.2rem;
    }
`
export {
    StyleNews
}