import React from 'react';
import NavBottomButtons from './NavBottomButtons';
import MainDescriptionElement from './MainDescriptionElement';
import MainHeader from './MainHeader';

import { sampleText, sampleText2 } from '../../static/MainText'
import book from '../../static/newbook.jpg'
import pictureMe from '../../static/profilePic.jpg'
import MainContainer from '../common/MainContainer'
import "./NavigationSite.css"


function NavigationSite({ user, handleLogOut }) {

    return (

        <MainContainer upperBar user={user} handleLogOut={handleLogOut}>
            <MainHeader />
            <MainDescriptionElement picture={book} text={sampleText} flowDirection="description-row" descriptionText="description-text" />
            <MainDescriptionElement picture={pictureMe} text={sampleText2} flowDirection="description-row row-reversed" descriptionText="description-text text-reversed" />
            <NavBottomButtons />
        </MainContainer>
    );
}

export default NavigationSite;


