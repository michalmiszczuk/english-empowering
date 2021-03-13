import React, { useState } from 'react';
import './FooterToolTip.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FooterToolTip({ href, icon, information }) {
    const [tooltip, setToolTip] = useState(false)



    return (
        <>
            <div onMouseEnter={() => setToolTip(true)} onMouseLeave={() => setToolTip(false)} >
                <a href={href} className="footer-icon"><FontAwesomeIcon icon={icon} className="fa-lg" /></a>
            </div>
            <div className={tooltip ? "tooltipOn" : "tooltipOff"}>{information}</div>
        </>
    );
}

export default FooterToolTip;