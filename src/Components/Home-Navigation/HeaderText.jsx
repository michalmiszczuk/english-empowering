import React from 'react';
import './HeaderText.css'

function HeaderText({ firstLine, secondLine, thirdLine }) {
    return (
        <div id="headers-container">
            <div id="header-1-line" >{firstLine}</div>
            <div id="header-2-line" >{secondLine}</div>
            <div id="header-3-line">{thirdLine}</div>
        </div>
    );
}

export default HeaderText;