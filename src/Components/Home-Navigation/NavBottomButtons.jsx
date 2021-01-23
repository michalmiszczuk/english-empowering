import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button.jsx';
import './NavBottomButtons.css'
import 'aos/dist/aos.css'
import "./NavigationSite.css"


function NavBottomButtons({ props }) {

    return (
        <div className="navigation-learn-more" data-aos-anchor-placement="center-bottom" data-aos="fade-up">
            <div className="nav-bottom-buttons-text">Dowiedz się więcej:</div>
            <div className="nav-bottom-buttons-container">
                <Link to="/aboutme" className="link-button"><Button btnClass="nav-bottom-buttons" text="O MNIE" /></Link>
                <Link className="link-button" to="/lessons"><Button btnClass="nav-bottom-buttons" text="O ZAJĘCIACH" /></Link>
            </div>
        </div>
    );
}

export default NavBottomButtons;