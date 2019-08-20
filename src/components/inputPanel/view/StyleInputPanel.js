import styled from 'styled-components'

const StyleInputPanel = styled.div`
    .inputPlace{
        width: 100%;
        height: .5rem;
        display: flex;
        align-items: center;
        background: #f5f5f6;
        z-index: 5500;
        .voice, .emoji, .addother{
            width: .27rem;
            height: .27rem;
            margin: .12rem .1rem;
            span{
                display: inline-block;
                width: .54rem;
                height: .54rem;
                transform: scale(.5);
                transform-origin: 0 0
            }
        }
        .sendBtn { 
            width: .54rem;
            height: .27rem;
            line-height: .27rem;
            font-size: .16rem;
            color: white;
            text-align: center;
            border-radius: .04rem;
            margin: .12rem .21rem .12rem .1rem;
            background: #5fb9c4;
        }
        .emojiBtn{
            display: flex;            
        }
        .voice span{
            background: url('../images/inputPanel/nav-voice.png') no-repeat ;
        }
        .emoji span{
            background: url('../images/inputPanel/nav-emoji.png') no-repeat ;
        }
        .addother span{
            background: url('../images/inputPanel/nav-addother.png') no-repeat ;
        }
        .inputwrap{
            flex:1;
            height: 100%;
            padding: .11rem .11rem ;
            text-align: center;
            input{
                height: .28rem;
                width: 100%; 
                font-size: .16rem;
                padding: 0 .1rem;
                line-height: .28rem;
                border: 0;
                border-radius: .1rem;
            } 
        }
    }
    .hiddenStyle{
        display: none !important;
    }
    .bottomPlace{
        height: 1.83rem;
        color: #303030;
        padding: .16rem  .15rem;
        background: #f7f7f7;
        display: flex;
        align-items: flex-start;
        /* flex-wrap: wrap;
        align-content: center; */
        .otherItem{
            width: 25%;
            height: .9rem;
            text-align: center;
            padding: .1rem .05rem;
            border-radius: .1rem;
            background: #f7f7f7;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            img{
                width: .5rem;
            }
            span{
                color: #303030;
                font-size: .15rem;
            }
        }
    }
    .upshow{
        animation: open .4s ease forwards;
    }
    @keyframes open {
        0% {
            transform: translateY(0)
        }
        100% {
            transform: translateY(-1.83rem)
        }
    }
    @keyframes close {
        0% {
            transform: translateY(0)
        }

        100% {
            transform: translateY(1.83rem)
        }
    }
`
export {
    StyleInputPanel
}