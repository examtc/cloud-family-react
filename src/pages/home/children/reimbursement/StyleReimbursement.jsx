import styled from 'styled-components'
const StyleReimbursement = styled.div`
 display:flex;
    width:100%;
    height:100%;
    flex-direction: column;
    .container{
        height: 100%;
        background:#f7f7f7;
        padding-top:.1rem;
    }
    .am-list-body{
        background:#f7f7f7;
    }
    .am-list-item{
        margin-bottom :.1rem
    }
    .am-input-label{
        color:#303030 !important;
        font-size:.16rem
    }
    .group{
        margin-bottom :.2rem
    }
    .group .am-list-item{
        margin-bottom :0
    }
    .am-list-extra{
        flex:1;
    }
    .am-textarea-label{
        color: #303030 !important;
    }
    .am-input-control input{
        color: #888 !important;
        text-align:right;
        padding-right:.1rem !important;
    }
    .submit{
        width: 100%;
        height:.45rem;
        text-align:center;
        color: #74d4e0;
        line-height:.45rem;
        font-size:.16rem;
    }
    .jx{
        margin-top:.2rem;
    }
    .am-input-label {
        width:1rem !important;
    }
    .am-textarea-label,.am-list-content{
        color:#303030 !important;
    }
    .main{
        flex:1;
        overflow-y:auto;
    }
    .am-textarea-label,.am-list-content{
        color:#303030 !important;
    }
    .am-list-item{
        margin-bottom: 0 !important;
    }
    .my-accordion{
        margin-top: .1rem !important;
    }
    .am-accordion-header{
        color:#303030 !important;
    }
`
export {
    StyleReimbursement
} 