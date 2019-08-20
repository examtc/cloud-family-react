import styled from 'styled-components'
import border from 'components/styles/border'

const SettingStyled = styled.div`
    height: 100%;

    .am-activity-indicator {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        justify-content: center;
    }
    >div {
        overflow: hidden;
    }
    div.S_sex {
        position: absolute;
        background: rgba(173,173,175,0.4);
        width: 100%;
        height: 100%;
        z-index: 99999;

        div.S_sex_cen {
            display: flex;
            flex-direction: column;
            position: absolute;
            bottom: .045rem;
            left: .08rem;
            height: max-content;
            right: .08rem;
            animation-duration: 0.5s;

            div {
                padding: 0 .08rem;
                justify-content: space-around;
                display: flex;
                background: #fff;
                flex-direction: column;
                height: 1.78rem;
                border-radius: .1rem;

                p {
                    text-align: center;
                    height: .59rem;
                    line-height: .59rem;
                    color: #5fb9c4;
                    font-size: .16rem;
                }
            }

            button {
                height: .53rem;
                background: #fff;
                color: #5fb9c4;
                font-size: .16rem;
                border: 0;
                border-radius: .1rem;
                margin-top: .065rem;
            }
        }
    }

    div.S_masking {
        position: absolute;
        background: rgba(173,173,175,0.4);
        width: 100%;
        height: 100%;
        z-index: 5;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 2.515rem;
            height: 1.305rem;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: #fff;
            border-radius: .05rem;
            margin: auto;
            z-index: 10;

            p {
                /* font-weight: 600; */
            }

            p:nth-of-type(1) {
                font-size: .16rem;
                margin-top: .12rem;
            }

            p:nth-of-type(2) {
                font-size: .12rem;
                width: 1.79rem;
                text-align: center;
                line-height: .22rem;
            }
        }
    }
    
    div.mineSetting {
        padding: 0 .19rem 0 .175rem;
        margin-bottom: .2rem;
        div.MS_header {
            height: .33rem;
            line-height: .33rem;
            display: flex;
            position: relative;
            justify-content: center;
            div {
                position: absolute;
                left: 0;
                width: .11rem;
                height: .17rem;
                img {
                    width: 100%;
                    height:100%;
                }
            }

            span {
                font-size: .18rem;
            }
        }

        div.MS_headPortrait {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            margin-top: .065rem;

            div.MS_H_img {
                width: .66rem;
                height: .66rem;
                margin-bottom: .11rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            div.MS_H_text {
                display: flex;
                p {
                    font-size: .16rem;
                    margin-right: .065rem;
                }
                div {
                    width: .145rem;
                    height: .145rem;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

    .mineInformation {
        .am-list-extra {
            font-size: .15rem !important;
        }
        .am-list-item {
            padding-left: .175rem !important;
        }
        .am-list-content {
            font-size: .16rem !important;
            /* font-weight: 600 !important; */
        }
        .M_mine,.M_company,.M_phone {
            border-top: .06rem solid #f7f7f7;

            div.M_M_public {
                padding: 0 0 0 .175rem;
                
                .M_M_noBoreder {
                    border: none !important;
                }
                div.M_M_P_cen {
                    padding-right: .19rem;
                    display: flex;
                    align-items: center;
                    height: .435rem;
                    justify-content: space-between;
                    border-bottom: 0.001rem solid #f7f7f7;
                    div.M_M_P_text {
                        display: flex;
                        div.M_M_P_Bimg {
                            width: .085rem;
                            height: .135rem;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        div.M_M_P_Timg {
                            width: .21rem;
                            height: .16rem;
                            margin-right: .12rem;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        p {
                            font-size: .15rem;
                            color: #7e838b;
                            font-weight: 500;
                            margin-right: .115rem;
                        }
                    }
                }

                p {
                    font-size: .16rem;
                     /* font-weight: 600; */
                    
                }
            }
        }
    }
`

const Button = styled.button``

const ButtonBorder = styled(border({
    component:Button,
    borderWidth: '1px 0 0 0',
    borderColor:'#f7f7f7'
}))`
    width: 100%;
    height: .33rem;
    font-size: .12rem;
    font-weight: 600;
    line-height: .33rem;
    border: 0;
    background: #fff;
    align-self: flex-end;
    margin-top: .175rem;
`
const p = styled.p`
    text-align: center;
    height: .59rem;
    line-height: .59rem;
`

const PBorder = styled(border({
    component:p,
    borderWidth: '0 0 1px 0',
    borderColor:'#f7f7f7'
}))`
`

export {
    SettingStyled,
    ButtonBorder,
    PBorder
}