import React from 'react';
import flags from '../../static/flags.png'
import HeaderText from './HeaderText';
import bckimage from '../../static/new1.jpg'

import './MainHeader.css'

function MainHeader({ props }) {

    return (
        <div className="navigation-main-header" style={{ backgroundImage: `url(${bckimage})` }}>
            <HeaderText firstLine={firstLine} secondLine={secondLine} thirdLine={thirdLine} />
            <div id="flag-cont">
                <img src={flags} className="main-header-flag" alt="" />
            </div>
        </ div>
    );
}

export default MainHeader;

const firstLine = 'Learn English effortlessy.'
const secondLine = 'Master communication.'
const thirdLine = 'Empower yourself.'
