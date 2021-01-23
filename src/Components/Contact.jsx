import React, { useEffect } from 'react';
import MainContainer from './common/MainContainer';
import "./Contact.css"
import Aos from "aos"
import 'aos/dist/aos.css'

function Contact(props) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <MainContainer navBar title="Kontakt">
            <div id="contact-photo" data-aos="slide-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" />
            <div className="contact-text-container" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                <div id="contact-1" className="contact-info">Feel free to contact me :)</div>
                <div id='contact-2' className="contact-info">TEL: 579 870 405 </div>
                <div id='contact-3' className="contact-info">E-mail: eng-empowering@gmail.com</div>
                <div id='contact-4' className="contact-info">https://www.facebook.com/athlarster</div>
            </div>
        </MainContainer>
    )
}

export default Contact;