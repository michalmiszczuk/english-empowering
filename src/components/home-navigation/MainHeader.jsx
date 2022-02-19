import React from 'react';
import flags from '../../static/flags.png'

import './MainHeader.css'

function MainHeader({ props }) {

    return (
        <div className="navigation-main-header">
            <div id="headers-container">
                <div id="header-1-line" >Learn English effortlessy.</div>
                <div id="header-2-line" >Master communication.</div>
                <div id="header-3-line">Empower yourself.</div>
            </div>
            <div id="flag-cont">
                <img src={flags} className="main-header-flag" alt="" />
            </div>
        </ div>
    );
}

export default MainHeader;
