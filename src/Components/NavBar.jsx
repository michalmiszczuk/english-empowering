import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function NavBar({ name }) {
    return (
        <div className="navBar">
            <Link to="/main" >
                <FontAwesomeIcon icon={faChevronLeft} className="navBarIcon" />
            </Link>
            <div className="navBarText">{name}</div>
        </div>
    );
}


export default NavBar;