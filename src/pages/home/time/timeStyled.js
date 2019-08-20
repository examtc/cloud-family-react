import styled from 'styled-components'
import { styleColor } from 'assets/styles/color.js'
import border from 'components/styles/border'

const TimeContainer = styled.div`
    line-height: 1;
    margin-top: .215rem;
    padding: 0 .23rem 0 .31rem;
    position: relative;
    display: flex;
    flex-direction: column;
    height: max-content;
    div.time_header {
        font-size: .18rem;
        
    }
    div.timeDate {
        overflow: hidden;
        width: 100%;
        margin-top: .2rem;
        display: flex;
        ul {
            display: flex;
            width: max-content;
            li {
                margin: 0 0 0 .365rem;
                font-size: .18rem;
                width: .26rem;
                height: .26rem;
                border-radius: 50%;
                line-height: .26rem;
                font-weight: 600;
                color: #000;
            }
            li.active {
                background: #c0e9db;
                color: #000;
            }
            li:first-of-type {
                margin-left: 0;
            }
            
        }
    }
`
const timeLine = styled.div`
    
`
const TimeLineBorder = styled(border({
    component:timeLine,
    borderWidth: '0 0 1px 0',
    borderColor:styleColor
}))`
    height: 0.01rem;
    margin-top: .185rem;
`

export {
    TimeContainer,
    TimeLineBorder
}