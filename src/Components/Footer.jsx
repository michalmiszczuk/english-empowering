import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import FooterText from './FooterText';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer({ props }) {
    const [showContactInfo, setShowContactInfo] = useState(false)
    const [message, setMessage] = useState()


    return (
        <>
            <div data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="center-bottom" id="footer-container-desktop">
                <a href="https://www.facebook.com/athlarster" data-tooltip="facebook" className="footer-icon"><FontAwesomeIcon icon={faFacebookSquare} className="fa-lg" /></a>
                <div className="footer-icon" data-tooltip="athlarster@gmail.com" ><FontAwesomeIcon icon={faEnvelope} className="fa-lg" /></div>
                <div className="footer-icon" data-tooltip="579 870 405" ><FontAwesomeIcon icon={faPhone} className="fa-lg" /></div>
                <Link className="footer-links" to="./termsconditions" ><FooterText text="Regulamin" /></Link>
                <Link className="footer-links" to="./privacypolicy" ><FooterText text="Polityka Prywatności" /></Link>
            </div >
            <div id="footer-container-phone" className="footer-icon" data-aos="flip-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
                <a href="https://www.facebook.com/athlarster" className="footer-icon"><FontAwesomeIcon icon={faFacebookSquare} className="fa-lg" /></a>
                <div className="footer-icon" onClick={() => { setShowContactInfo(!showContactInfo); setMessage("athlarster@gmail.com") }}  ><FontAwesomeIcon icon={faEnvelope} className="fa-lg" /></div>
                <div className="footer-icon" onClick={() => { setShowContactInfo(!showContactInfo); setMessage("579 870 405") }} > <FontAwesomeIcon icon={faPhone} className="fa-lg" /></div>
                <Link className="footer-links" to="./termsconditions" ><FooterText text="Regulamin" /></Link>
                <Link className="footer-links" to="./privacypolicy" ><FooterText text="Polityka Prywatności" /></Link>
                <div className={showContactInfo ? "contact-info-footer" : "contact-info-footer-hidden"}>{message}</div>
            </div >
        </>
    );
}

export default Footer;