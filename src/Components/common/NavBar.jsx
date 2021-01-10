import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import NavBarIcon from '../Home-Navigation/NavBarIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'


function NavBar({ name, onSetMenu }) {

    return (
        <div className="nav-bar">
            <Link to="/main" >
                <FontAwesomeIcon icon={faChevronLeft} className="nav-bar-icon" />
            </Link>
            <div className="nav-bar-text">{name}</div>
            <div className="nav-bar-menu-button" >
                <Button onClick={onSetMenu}><NavBarIcon /></Button>
            </div>
        </div>
    );
}


export default NavBar;