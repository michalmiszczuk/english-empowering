import React from 'react';

import inStudioPicture from "../static/I/meInStudio.jpg"
import MeDrums from "../static/I/meDrums.jpg"
import I from "../static/I/zdjProfil.jpg"
import book from "../static/I/beHappy.jpg"
import aboutMeText from '../static/Txt/AboutMeText'
import MainContainer from './common/MainContainer';
import "./AboutMe.css"


function AboutMe(props) {

    return (
        <MainContainer navBar title="O mnie">
            <div id="about-me-main-photo">
                <img src={MeDrums} alt="" className="main-pic" />
                <img src={inStudioPicture} alt="" className="main-pic" />
                <img src={book} alt="" className="main-pic" />
            </div>
            <div className="phone-photos">
                <img src={inStudioPicture} alt="" className="main-pic" />
                <img src={MeDrums} alt="" className="main-pic" />
            </div>
            <div className="first-row">
                <div className="text-div">{aboutMeText} </div>
                <img src={I} alt="" className="profil-pic" />
            </div>
            <div className="phone-photos-bottom">
                <img src={I} alt="" className="main-pic" />
                <img src={book} alt="" className="main-pic" />
            </div>
        </MainContainer>
    );
}

export default AboutMe;

