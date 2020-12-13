import React from 'react';
import flags from '../../static/flags.png'
import HeaderText from './HeaderText';

import './MainHeader.css'

const firstLine = 'Learn English effortlessy.'
const secondLine = 'Master communication.'
const thirdLine = 'Empower yourself.'

function MainHeader({ props }) {
    return (
        <div className="navigation-main-header">
            <HeaderText firstLine={firstLine} secondLine={secondLine} thirdLine={thirdLine} />
            <div id="flag-cont">
                <img src={flags} style={{ opacity: 0.7 }} className="main-header-flag" alt="" />
            </div>
        </ div>
    );
}

export default MainHeader;
