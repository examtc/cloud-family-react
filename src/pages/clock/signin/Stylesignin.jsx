import styled from 'styled-components'

const StyleSigninContainer=styled.div`
    position: relative;
    flex:1;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#fff;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    .but{
    width: 169px;
	height: 44px;
	background-color: #74d4e0;
	border-radius: 20px;
    }
    .but .container{
        display:flex;
        justify-content:space-around;
        align-items:center;
        padding:0 .15rem;
    }
    .but .container .signinText{
        height: .44rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .but .container .signinText span{
       display:block;
       color:#fff;
       line-height:1.05em;
       margin-bottom:.03rem;
    }
    .but .container  img{
        height: .28rem;
    }
    .header{
      position: absolute;
      align-self: flex-start;
      align-content: flex-end;
      left:.15rem;
      top:.15rem;
      width: 100%;
    }
    .header .container{
        display:flex;
        width: 100%;
    }
    .header .container img{
        height:.6rem;
        width:.6rem;
    }
    .header .container .detail{
       padding-top:.2rem;
       padding-left:.1rem;
       flex: 1;
    }
    .header .container h1{
       font-size:.18rem;
    }
    .header .container span{
       display:block;
       width:100%;
       font-size:.1rem;
       color: #d9dbe0;
    }


`
export default StyleSigninContainer
