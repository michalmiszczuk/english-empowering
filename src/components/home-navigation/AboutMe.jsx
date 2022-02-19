import React from 'react';

import book from "../../static/I/beHappy.jpg"
import I from "../../static/I/zdjProfil.jpg"
import inStudioPicture from "../../static/I/meInStudio.jpg"
import MeDrums from "../../static/I/meDrums.jpg"

import "./AboutMe.css"
import 'aos/dist/aos.css'
import { aboutMeTextPl } from '../../static/Txt/texts';



function AboutMe({ aboutMe }) {

    return (
        <section ref={aboutMe}>
            <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">O mnie</h1>
            <div id="about-me-main-photo" data-aos="fade-up">
                <img src={MeDrums} alt="" className="main-pic" />
                <img src={inStudioPicture} alt="" className="main-pic" />
                <img src={book} alt="" className="main-pic" />
            </div>
            <div className="phone-photos" data-aos="fade-up">
                <img src={inStudioPicture} alt="" className="main-pic-top" />
                <img src={MeDrums} alt="" className="main-pic-top" />
            </div>
            <div className="first-row" data-aos="zoom-in">
                <div className="text-div">{aboutMeTextPl} </div>
            </div>
            <div className="phone-photos-bottom" data-aos="slide-up" data-aos-duration="1000">
                <img src={I} alt="" className="main-pic" />
                <img src={book} alt="" className="main-pic" />
            </div>
        </section>
    );
}

export default AboutMe;

