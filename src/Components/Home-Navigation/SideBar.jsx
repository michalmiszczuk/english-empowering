import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import "./SideBar.css"

function SideBar({ menu, onAboutMe, onLessons, onPricing, onContact }) {
    return (
        <div className={menu ? "side-bar-container" : "side-bar-hidden"}>
            <div className="nav-logo" ><Logo /></div>
            <div className="side-bar-item" onClick={onAboutMe}>O mnie</div>
            <div className="side-bar-item" onClick={onLessons}>Zajęcia</div>
            <div className="side-bar-item" onClick={onPricing}>Cennik</div>
            <Link to="/calendar"><div className="side-bar-item">Kalendarz</div></Link>
            <a className="link-button" href="https://www.facebook.com/English-Empowering-105936414259466">
                <div className="side-bar-item">Blog</div></a>
            <div className="side-bar-item" onClick={onContact}>Kontakt</div>
        </div >
    );
}

export default SideBar;