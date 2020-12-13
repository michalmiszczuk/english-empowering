import React from 'react';
import './FooterText.css'

function FooterText({ text }) {
    return (
        <div className="footer-text">
            {text}
        </div>
    );
}

export default FooterText;