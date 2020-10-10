import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import "./CSS/Contact.css"
import newPhoto from "../static/cat.jpg"

function Contact(props) {
    return (
        <div id="mainContactCont" >
            <NavBar name="Kontakt" />
            <div id="contactPhoto" style={{ backgroundImage: `url(${newPhoto})` }}></div>
            <div className="contactText" style={{
            }}>
                <p>Feel free to contact me :) <br /><br />
                 TEL: 579 870 405 <br /><br />
                 E-mail: eng-empowering@gmail.com <br /><br />
                https://www.facebook.com/athlarster</p>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;