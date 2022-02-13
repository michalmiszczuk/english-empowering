import React from 'react';
import './LoadingAnimation.css'

function LoadingAnimation(props) {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <div className="spinner-text">Ładowanie...</div>
                <div className="spinner-sector spinner-sector-red"></div>
                <div className="spinner-sector spinner-sector-blue"></div>
                <div className="spinner-sector spinner-sector-green"></div>
            </div>
        </div>
    );
}

export default LoadingAnimation;