import styled from 'styled-components'
import { styleColor } from 'assets/styles/color.js'


const ListContainer = styled.div`
    ul.List {
        display: flex;
        padding: 0 .17rem 0 .23rem;
        margin-top: .28rem;
        justify-content: space-between;
        li {
            
            flex: none;
            font-size: .12rem;
            color: #303030;
            line-height: .22rem;
            border-bottom: .02rem solid #fff;
            position: relative;
            width: max-content;
        }
        li:nth-of-type(6) {
            margin-right: 0;
        }
        li.active {
            border-bottom: .02rem solid ${styleColor};
        }
    }
    ul.ListContent {
        width: max-content;
        padding-left: .23rem;
        margin-top: .12rem;
        li {
            width: 1.88rem;
            height: 2.45rem;
            /* background-color: ${styleColor}; */
	        border-radius: .15rem;
            margin-right: .285rem;
            position: relative;
            border: 1px solid ${styleColor};
            overflow: hidden;

            div {
                width: .13rem;
                height: .13rem;
                border: solid .03rem ${styleColor};
                border-radius: 50%;
                margin: .12rem 0 0 .135rem;
                position: absolute;
                z-index: 10;
            }

            img {
                position: relative;
                /* width: 100%; */
                height: 90%;
                left: -21%;
                top: 6%;
            }
        }
        
    }
`

export {
    ListContainer
}