import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import FooterText from './FooterText';
import { Link } from 'react-router-dom';
import "./Footer.css"
import FooterToolTip from './FooterToolTip';

function Footer({ props }) {
    const [showContactInfo, setShowContactInfo] = useState(false)
    const [message, setMessage] = useState()


    return (
        <>
            <div id="footer-container-desktop">
                <FooterToolTip href="https://www.facebook.com/English-Empowering-105936414259466" information="Facebook" icon={faFacebookSquare} />
                <FooterToolTip href="mailto:eng.empowering@gmail.com" information="eng.empowering@gmail.com" icon={faEnvelope} />
                <FooterToolTip href="tel:+48-579-870-405" information="579 870 405" icon={faPhone} />
                <Link to="./termsconditions" ><FooterText text="Regulamin" /></Link>
                <Link className="footer-links" to="./privacypolicy" ><FooterText text="Polityka Prywatności" /></Link>
            </div >
            <div id="footer-container-phone" className="footer-icon">
                <a href="https://www.facebook.com/athlarster" className="footer-icon"><FontAwesomeIcon icon={faFacebookSquare} className="fa-lg" /></a>
                <div className="footer-icon" onClick={() => { setShowContactInfo(!showContactInfo); setMessage("eng.empowering@gmail.com") }}  ><FontAwesomeIcon icon={faEnvelope} className="fa-lg" /></div>
                <a className="footer-icon" href="tel:+48-579-870-405" > <FontAwesomeIcon icon={faPhone} className="fa-lg" /></a>
                <Link className="footer-links" to="./termsconditions" ><FooterText text="Regulamin" /></Link>
                <Link className="footer-links" to="./privacypolicy" ><FooterText text="Polityka Prywatności" /></Link>
                <div className={showContactInfo ? "contact-info-footer" : "contact-info-footer-hidden"}>{message}</div>
            </div >
        </>
    );
}

export default Footer;