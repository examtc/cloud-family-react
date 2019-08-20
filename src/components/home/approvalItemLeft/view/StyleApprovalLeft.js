import styled from 'styled-components'

const StyleApprovalLeft =styled.div`
        height:5.5rem;
        overflow:hidden;
        ul{
            display:flex;
            flex-direction:column;
            li{
                line-height:1;
                text-align:left;
                display:flex;
                height:0.62rem;
                margin-bottom:0.22rem;
                position:relative;
                >span{
                    height:0.35rem;
                    width:0.35rem;
                    border-radius:50%;
                    overflow:hidden;
                    display:inline-block;
                    img{
                        height:100%;
                        width:100%;
                    }
                }
                >div{
                    position:absolute;
                    right:0;
                    top:0;
                    >i{
                        display:inline-block;
                        height:0.05rem;
                        width:0.05rem;
                        border-radius:50%;
                        background:#c6c6c6;
                        margin-left:0.02rem;
                    }
                }
                aside{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    height:0.4rem;
                    margin-left:0.1rem;
                    h3{
                        font-size:0.16rem;
                        color:#000;
                        font-weight:normal;
                    }
                    >label{
                        padding-bottom:0.05rem;
                        font-size:0.12rem;
                        color:#72d8dd;
                    }
                }
            }
        }
`

export{
    StyleApprovalLeft
}