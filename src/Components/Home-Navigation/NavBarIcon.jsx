import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBarIcon.css'

function NavBarIcon(props) {
    return (
        <div>
            <FontAwesomeIcon icon={faBars} id="navbar-menu-icon" />
        </div>
    );
}

export default NavBarIcon;