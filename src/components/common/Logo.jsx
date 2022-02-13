import React from 'react';
import logo from "../../static/englogo2.jpg"
import "./register-login-forms.css"

function Logo({ logoClass }) {
    return (
        <div className={logoClass}>
            <img id="logo" src={logo} alt="" />
        </div>

    );
}

export default Logo;