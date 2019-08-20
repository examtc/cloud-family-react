import React, { Component } from 'react';
import HeaderContainer from '../header/HeaderContainer'
import { HomeContainer as HomeContainerStyled } from './Homestyled'
import ListContainer from '../list/ListContainer'
import SignInContainer from '../signIn/signInContainer'
import TimeContainer from '../time/timeContainer'
import NewsContainer from '../news/NewsContainer'

class HomeUi extends Component {
    render() {
        
        return (
            <>
                <HomeContainerStyled id="content">
                    <HeaderContainer></HeaderContainer>
                    <ListContainer></ListContainer>
                    <SignInContainer></SignInContainer>
                    <TimeContainer></TimeContainer>
                    <NewsContainer></NewsContainer>
                </HomeContainerStyled>
            </>
        );
    }

}

export default HomeUi;
