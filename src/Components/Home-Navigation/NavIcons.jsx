import React from 'react';
import { Link } from 'react-router-dom';

import NavCard from './NavCard';
import './NavIcons.css'

function NavIcons({ menu, onAboutMe, onLessons, onPricing, onContact }) {

    return (
        <div className={menu ? "icons-container" : "icons-container hidden"}>
            <div onClick={onAboutMe}><NavCard description={"O MNIE"} /></div>
            <div onClick={onLessons}><NavCard description={"LEKCJE"} backYposition={"95%"} /></div>
            <div onClick={onPricing}><NavCard description={"CENNIK"} /></div>
            <Link className="link-button" to="/calendar"><NavCard description={"KALENDARZ"} /></Link>
            <a className="link-button" href="https://www.facebook.com/English-Empowering-105936414259466">
                <NavCard description={"BLOG"} /></a>
            <div onClick={onContact}><NavCard description={"KONTAKT"} /></div>
        </div >
    );
}

export default NavIcons;