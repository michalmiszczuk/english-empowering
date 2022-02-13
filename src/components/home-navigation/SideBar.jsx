import React from 'react';

import Logo from '../common/Logo';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import "./SideBar.css"

function SideBar({ menu, onAboutMe, onLessons, onPricing, onCloseIcon, onReviews }) {
    return (
        <nav className={menu ? "side-bar-container" : " side-bar-container side-bar-hidden"}>
            <FontAwesomeIcon onClick={onCloseIcon} className="close-icon" icon={faTimes} />
            <div className="nav-logo" ><Logo /></div>
            <div className="side-bar-item" onClick={onAboutMe}>O mnie</div>
            <div className="side-bar-item" onClick={onLessons}>Zajęcia</div>
            <div className="side-bar-item" onClick={onReviews}>Opinie</div>
            <div className="side-bar-item" onClick={onPricing}>Cennik</div>
            <Link to="/calendar"><div className="side-bar-item">Kalendarz</div></Link>
        </nav >
    );
}

export default SideBar;