import React, { useContext } from 'react';
import flags from '../../static/flags.png'
import HeaderText from './HeaderText';
import bckimage from '../../static/new1.jpg'

import './MainHeader.css'
import { LoadingContext } from '../../contexts/LoadingContext';

const firstLine = 'Learn English effortlessy.'
const secondLine = 'Master communication.'
const thirdLine = 'Empower yourself.'


function MainHeader({ props }) {

    const { setIsLoading } = useContext(LoadingContext)

    // if (!bckimage) setIsLoading(true);

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
