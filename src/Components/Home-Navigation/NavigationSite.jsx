import React, { useRef } from 'react';
import NavBottomButtons from './NavBottomButtons';
import MainDescriptionElement from './MainDescriptionElement';
import MainHeader from './MainHeader';

import book from '../../static/newbook.jpg'
import pictureMe from '../../static/profilePic.jpg'
import MainContainer from '../common/MainContainer'
import 'aos/dist/aos.css'
import "./NavigationSite.css"
import Lessons from '../Lessons';
import Pricing from '../Pricing';
import AboutMe from '../AboutMe';
import Contact from '../Contact';



function NavigationSite({ user, handleLogOut }) {

    const aboutMe = useRef(null);
    const lessons = useRef();
    const pricing = useRef();
    const contact = useRef();

    const handleAboutME = () => aboutMe.current.scrollIntoView({ behavior: "smooth" });
    const handleLessons = () => lessons.current.scrollIntoView({ behavior: "smooth" });
    const handlePricing = () => pricing.current.scrollIntoView({ behavior: "smooth" });
    const handleContact = () => contact.current.scrollIntoView({ behavior: "smooth" });


    return (
        <MainContainer upperBar user={user} handleLogOut={handleLogOut} onAboutMe={handleAboutME} onLessons={handleLessons} onPricing={handlePricing} onContact={handleContact}>
            <div className="main-text-phone" data-aos="slide-down" >Nauka języka angielskiego</div>
            <div data-aos="slide-down" >
                <MainHeader />
            </div>
            <div data-aos="fade-up" >
                <MainDescriptionElement picture={book} text={sampleText} flowDirection="description-row" descriptionText="description-text" />
            </div>
            <div data-aos="fade-up" >
                <MainDescriptionElement picture={pictureMe} text={sampleText2} flowDirection="description-row row-reversed" descriptionText="description-text text-reversed" />
            </div>
            <div >
                <NavBottomButtons />
                <div ref={lessons}>
                    <Lessons />
                </div>
                <div ref={aboutMe}>
                    <AboutMe />
                </div>
                <div ref={pricing}>
                    <Pricing />
                </div>
                <div ref={contact}>
                    <Contact />
                </div>
            </div>
        </MainContainer >
    );
}

export default NavigationSite;


const sampleText = <p>Czy kiedykolwiek uczyłeś się angielskiego i nie widziałeś żadnego rezulatatu, albo postępy były niewielkie ? <br /><br />
A może masz już dość kursów językowych czy przerabiania przez miesiące tej samej książki strona po stronie ? <br /><br />
Dlaczego jedni po roku czasu przeskakują z poziomu A2 na B2, a inni nie mogą tego zrobić przez kilka lat ?

</p>

const sampleText2 = <p>
    Potrzebujesz solidnego planu nauki w którym będzie śledził swoje postępy ?  <br /><br />
    Prostych wyjaśnień skomplikowanych rzeczy ? Dużo praktyki w mówieniu ?  <br /><br />
    Trafiłeś w dobre miejsce :)

</p>
