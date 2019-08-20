import styled from 'styled-components'
const StyleNotification = styled.div`
    width:100%;
    height:100%;
    background:#f7f7f7;
    font-size:.16rem;
    color: #303030;
    .am-list-content{
        font-size:.16rem !important;
        color: #303030 !important;
    }
    .message{
        
    }
    .info{
        color: #c6c6c6;
        font-size:.12rem;
        padding:.075rem .18rem .15rem;
    }
    .item{
        height:.45rem;
        line-height:.45rem;
        background:#fff;
        padding:0 .18rem;
        position: relative;
        font-size:.16rem;
        color: #303030;
    }
    .item span{
        color: #c6c6c6;
        position:absolute;
        right: .18rem;
    }
`
export{
    StyleNotification
}