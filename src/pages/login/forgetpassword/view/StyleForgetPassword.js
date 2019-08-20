import styled from 'styled-components'

const StyleForgetPassword= styled.div`
height:100%;
width:100%;
position:relative;
overflow:hidden;
>span{
    position:absolute;
    left:0.16rem;
    top:0.38rem;
    color:#303030;
    font-size:0.15rem;
}
main{
    margin-top:0.95rem;
    padding:0 0.35rem 0 0.49rem;
    h2{
        font-size:0.26rem;
        color:#303030;
        font-weight:normal;
        line-height:1;
    }
    >div{
        position:relative;
        margin-top:0.52rem;
        input{
            outline:none;
            border:0;
            ::placeholder{
                color:#c6c6c6;
                font-size:0.15rem;
            }
        }
        .phone{
            width:100%;
            border-bottom:1px solid #f7f7f7;
            display:flex;
            align-items:center;
            padding-bottom:0.15rem;
            margin-bottom:0.15rem;
            span{
                display:inline-block;
                height:0.18rem;
                width:0.38rem;
                background:#F0FAFB;
                border-radius:0.04rem;
                line-height:0.18rem;
                text-align:center;
                font-size:0.15rem;
                color:#c6c6c6;
            }
            input{
                height:0.18rem;
                padding-left:0.1rem;
            }
        }
        .code{
            width:100%;
            display:flex;
            padding-bottom:0.1rem;
            border-bottom:1px solid #f7f7f7;
            justify-content:space-between;
            span{
                color:#74d4e0;
                font-size:0.15rem;
                padding-top:0.15rem;
            }
        }
        .email{
            margin-top:0.76rem;
            input{
                width:100%;
                border-bottom:1px solid #f7f7f7;
                padding-bottom:0.1rem;
            }
        }
        .submit{
            margin-top:0.73rem;
            display:inline-block;
            height:0.5rem;
            width:0.5rem;
            position:absolute;
            right:0;
            border-radius:50%;
            overflow:hidden;
            img{
                height:100%;
                width:100%;
            }
        }
    }
}
`

export {
    StyleForgetPassword
}