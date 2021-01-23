import React, { useEffect } from 'react';

import inStudioPicture from "../static/I/meInStudio.jpg"
import MeDrums from "../static/I/meDrums.jpg"
import I from "../static/I/zdjProfil.jpg"
import book from "../static/I/beHappy.jpg"
import aboutMeText from '../static/Txt/AboutMeText'
import MainContainer from './common/MainContainer';
import useScrollUp from '../hooks/useScroller';
import "./AboutMe.css"
import Aos from "aos"
import 'aos/dist/aos.css'



function AboutMe(props) {
    useScrollUp()
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    return (
        <MainContainer navBar title="O mnie">
            <div id="about-me-main-photo" data-aos="slide-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <img src={MeDrums} alt="" className="main-pic" />
                <img src={inStudioPicture} alt="" className="main-pic" />
                <img src={book} alt="" className="main-pic" />
            </div>
            <div className="phone-photos" data-aos="slide-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <img src={inStudioPicture} alt="" className="main-pic-top" />
                <img src={MeDrums} alt="" className="main-pic-top" />
            </div>
            <div className="first-row" >
                <div className="text-div">{aboutMeText} </div>
                <div data-aos="slide-left" data-aos-anchor-placement="" data-aos-duration="1000">
                    <img src={I} alt="" className="profil-pic" />
                </div>
            </div>
            <div className="phone-photos-bottom" data-aos="slide-up" data-aos-duration="1000">
                <img src={I} alt="" className="main-pic" />
                <img src={book} alt="" className="main-pic" />
            </div>
        </MainContainer>
    );
}

export default AboutMe;

