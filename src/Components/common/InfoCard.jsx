import React from 'react';
import './InfoCard.css'

function InfoCard({ header, mainText, containerClass, headerClass, mainTextClass, pricing }) {
    return (
        <div className={containerClass}>
            <div className={headerClass}>{header}</div>
            <div className={mainTextClass}>{mainText}
                {pricing && <div className="price-one-hour">/1h</div>}
            </div>
        </div>
    );
}

export default InfoCard;