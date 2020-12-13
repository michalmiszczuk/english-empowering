import React from 'react';
import Button from './Button';
import NavBarIcon from '../Home-Navigation/NavBarIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './NavBar.css'


function NavBar({ name, handleSetMenu }) {

    return (
        <div className="nav-bar">
            <Link to="/main" >
                <FontAwesomeIcon icon={faChevronLeft} className="nav-bar-icon" />
            </Link>
            <div className="nav-bar-text">{name}</div>
            <div className="nav-bar-menu-button" >
                <Button onClick={handleSetMenu} width={45} height={45} borderradius="10px"><NavBarIcon /></Button>
            </div>
        </div>
    );
}


export default NavBar;