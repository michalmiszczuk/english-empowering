import React from 'react';
import './InfoCard.css'

function InfoCard({ header, mainText, containerClass, headerClass, mainTextClass }) {
    return (
        <div >
            <div className={containerClass}>
                <div className={headerClass}>{header}</div>
                <div className={mainTextClass}>{mainText}</div>
            </div>
        </div>

    );
}

export default InfoCard;