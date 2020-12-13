import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import FooterText from './FooterText';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer({ props }) {

    return (
        <div id="footer-container">
            <a href="https://www.facebook.com/athlarster" className="footer-icon"><FontAwesomeIcon icon={faFacebookSquare} className="fa-lg" /></a>
            <div className="footer-icon" data-tooltip="athlarster@gmail.com" ><FontAwesomeIcon icon={faEnvelope} className="fa-lg" /></div>
            <div className="footer-icon" data-tooltip="579 870 405" ><FontAwesomeIcon icon={faPhone} className="fa-lg" /></div>
            <Link className="footer-links" to="./termsconditions" ><FooterText text="Regulamin" /></Link>
            <Link className="footer-links" to="./contact" ><FooterText text="Polityka Prywatności" /></Link>
        </div >
    );
}

export default Footer;