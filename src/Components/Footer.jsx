import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import FooterText from './FooterText';
import { Link } from 'react-router-dom';
import "./CSS/Footer.css"

function Footer(props) {

    return (
        <div id="footerCont">
            <a href="https://www.facebook.com/athlarster" style={{ color: "cornsilk" }}><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></a>
            <div className="footerIcon" data-tooltip="athlarster@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></div>
            <div className="footerIcon" data-tooltip="579 870 405"><FontAwesomeIcon icon={faPhone} size="2x" /></div>
            <Link className="footerLinks" to="./termsconditions" ><FooterText text="Regulamin" color="cornsilk" fontSize={20} /></Link>
            <Link className="footerLinks" to="./contact" ><FooterText text="Polityka Prywatności" color="cornsilk" fontSize={20} /></Link>
        </div >
    );
}

export default Footer;