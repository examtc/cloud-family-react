import styled from 'styled-components'
const TopHeaderContainer =styled.div`
    width:100%;
    height: .44rem;
    background-color: #74d4e0;
    color: #fefefe;
    font-size : .18rem;
    position: relative;
    text-align: center;
    line-height :.44rem;
    display: flex;
    justify-content:center;
    align-items:center;
    .leftContainer{
        position: absolute;
        left:.225rem;
    }
    .rightContainer{
        position: absolute;
        right:.225rem;
        font-size: 15px;
    }
    .leftContainer img{
        width: .1rem;
	    height: .145rem;
        margin-right:.05rem;
    }
`
export {
    TopHeaderContainer
}