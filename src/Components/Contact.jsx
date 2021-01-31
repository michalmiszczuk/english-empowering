import React from 'react';
import "./Contact.css"


function Contact(props) {

    return (

        <div>
            <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" >Kontakt</h1>
            <div id="contact-photo" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" />
            <div className="contact-container" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                <div className="contact-text-container">
                    <div id="contact-1" className="contact-info">Feel free to contact me :)</div>
                    <div id='contact-2' className="contact-info">TEL: 579 870 405 </div>
                    <div id='contact-3' className="contact-info">E-mail: eng-empowering@gmail.com</div>
                    <div id='contact-4' className="contact-info">https://www.facebook.com/athlarster</div>
                </div>
            </div>
        </div>

    )
}

export default Contact;