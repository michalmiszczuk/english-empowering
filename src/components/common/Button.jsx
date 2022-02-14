import React from 'react';
import "./Button.css"

function Button({ validError, text, onClick, children, btnClass, enable }) {

    return (
        <button className={validError ? `main-button  ${btnClass} disabled` : `main-button ${btnClass}`}
            style={{ cursor: !validError ? "pointer" : "default" }}
            onClick={!validError || enable ? onClick : null}
        >
            {text}
            {children}
        </button>
    );
}


export default Button;