import React, { useRef } from 'react';

import AboutMe from './AboutMe';
import Lessons from './Lessons';
import MainContainer from '../common/MainContainer'
import MainDescriptionElement from './MainDescriptionElement';
import MainHeader from './MainHeader';
import Pricing from './Pricing';
import Reviews from './Reviews';

import book from '../../static/newbook.jpg'
import pictureMe from '../../static/profilePic.jpg'

import 'aos/dist/aos.css'
import "./NavigationSite.css"
import { text1, text2 } from '../../static/Txt/texts.jsx';



function NavigationSite({ user, handleLogOut }) {

    const aboutMe = useRef(), lessons = useRef(), reviews = useRef(), pricing = useRef();

    const handleAboutME = () => aboutMe.current.scrollIntoView({ behavior: "smooth" });
    const handleLessons = () => lessons.current.scrollIntoView({ behavior: "smooth" });
    const handleReviews = () => reviews.current.scrollIntoView({ behavior: "smooth" });
    const handlePricing = () => pricing.current.scrollIntoView({ behavior: "smooth" });


    return (
        <MainContainer upperBar user={user} handleLogOut={handleLogOut} onAboutMe={handleAboutME} onLessons={handleLessons} onPricing={handlePricing} onReviews={handleReviews}>
            <div className="main-text-phone" data-aos="slide-down" >NAUKA JĘZYKA ANGIELSKIEGO</div>
            <MainHeader />
            <div className='main-text-container'>
                <MainDescriptionElement picture={book} text={text1} flowDirection="description-row" descriptionText="description-text" />
                <MainDescriptionElement picture={pictureMe} text={text2} flowDirection="description-row row-reversed" descriptionText="description-text text-reversed" />
            </div>
            <div className="navigation-main-photo" data-aos="zoom-in" />
            <AboutMe aboutMe={aboutMe} />
            <Lessons lessons={lessons} />
            <Reviews reviews={reviews} />
            <Pricing pricing={pricing} />
        </MainContainer >
    );
}

export default NavigationSite;


