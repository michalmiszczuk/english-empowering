import React from 'react';
import MainContainer from './common/MainContainer';
import "./Contact.css"

function Contact(props) {
    return (
        <MainContainer navBar title="Kontakt">
            <div id="contact-photo" />
            <div className="contact-text-container">
                <div className='contact-text'>
                    <p>Feel free to contact me :) <br /><br />
                 TEL: 579 870 405 <br /><br />
                 E-mail: eng-empowering@gmail.com <br /><br />
                https://www.facebook.com/athlarster</p>
                </div>
            </div>
        </MainContainer>
    )
}

export default Contact;