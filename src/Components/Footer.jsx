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
    console.log(showContactInfo)

    const setShowInfo = () => showContactInfo ? setShowContactInfo(false) : setShowContactInfo(true)

    return (
        <>
            <div id="footer-container-desktop">
                <a href="https://www.facebook.com/athlarster" data-tooltip="facebook" className="footer-icon"><FontAwesomeIcon icon={faFacebookSquare} className="fa-lg" /></a>
                <div className="footer-icon" data-tooltip="athlarster@gmail.com" ><FontAwesomeIcon icon={faEnvelope} className="fa-lg" /></div>
                <div className="footer-icon" data-tooltip="579 870 405" ><FontAwesomeIcon icon={faPhone} className="fa-lg" /></div>
                <Link className="footer-links" to="./termsconditions" ><FooterText text="Regulamin" /></Link>
                <Link className="footer-links" to="./privacypolicy" ><FooterText text="Polityka Prywatności" /></Link>
            </div >
            <div id="footer-container-phone">
                <a href="https://www.facebook.com/athlarster" data-tooltip="facebook" className="footer-icon"><FontAwesomeIcon icon={faFacebookSquare} className="fa-lg" /></a>
                <div className="footer-icon" onClick={() => { setShowInfo(); setMessage("athlarster@gmail.com") }}  ><FontAwesomeIcon icon={faEnvelope} className="fa-lg" /></div>
                <div className="footer-icon" onClick={() => { setShowInfo(); setMessage("579 870 405") }} > <FontAwesomeIcon icon={faPhone} className="fa-lg" /></div>
                <Link className="footer-links" to="./termsconditions" ><FooterText text="Regulamin" /></Link>
                <Link className="footer-links" to="./privacypolicy" ><FooterText text="Polityka Prywatności" /></Link>
                <div className={showContactInfo ? "contact-info" : "contact-info-hidden"}>{message}</div>
            </div >
        </>
    );
}

export default Footer;