import React from 'react';

function FooterText({ text, color: c, fontSize: fs }) {
    return (
        <div style={{ color: c, fontSize: fs, fontFamily: "Marcellus SC" }}>
            {text}
        </div>
    );
}

export default FooterText;