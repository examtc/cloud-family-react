import styled from 'styled-components'
const StyleContacts = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .am-list-content{
        font-size:.15rem !important;
        
    }
    .main{
        flex:1;
        overflow-y:hidden;
    
    }
    .first_name{
        height: .2rem;
        background:#f7f7f7;
        font-size:.12rem;
        color: #6c6c6c;
        padding-left:.18rem;
        line-height:.2rem;
    }
    .listOpt{
        height: 100%;
        position:absolute;
        right:.1rem;
        z-index:100;
        
        /* top:1rem;; */
    }
    .listOpt ul{
        
       display:flex;
       flex-direction:column;
       justify-content:center;
        align-items:center;
        padding:1.8rem 0  1rem;
    }
    .listOpt ul li{
        /* flex:1;
        flex-direction:column;
        justify-content:center;
        align-items:center; */
    }
`
export {
    StyleContacts
}