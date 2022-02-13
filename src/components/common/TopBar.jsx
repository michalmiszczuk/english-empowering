import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './TopBar.css'


function TopBar({ name }) {

    return (
        <div className="nav-bar">
            <Link to="/main" >
                <FontAwesomeIcon icon={faChevronLeft} className="nav-bar-icon" size="lg" />
            </Link>
            <div className="nav-bar-text">{name}</div>
        </div>
    );
}


export default TopBar;