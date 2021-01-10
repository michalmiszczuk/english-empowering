import React from 'react';
import MainContainer from './common/MainContainer';
import "./Contact.css"

function Contact(props) {
    return (
        <MainContainer navBar title="Kontakt">
            <div id="contact-photo" />
            <div className="contact-text-container">
                <div className='contact-text'>
                    <div id="contact-1" className="contact-info">Feel free to contact me :)</div>
                    <div id='contact-2' className="contact-info">TEL: 579 870 405 </div>
                    <div id='contact-3' className="contact-info">E-mail: eng-empowering@gmail.com</div>
                    <div id='contact-4' className="contact-info">https://www.facebook.com/athlarster</div>
                </div>
            </div>
        </MainContainer>
    )
}

export default Contact;