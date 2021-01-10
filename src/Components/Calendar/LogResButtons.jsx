import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

function LogResButtons(props) {
    const noTextDec = {
        textDecoration: "none"
    }

    return (
        <div className="yes-no-buttons ">
            <Link style={noTextDec} to='/login'><Button text="ZALOGUJ" btnClass="log-res" /></Link>
            <Link style={noTextDec} to='/register'><Button text="ZAREJESTRUJ" btnClass="log-res" /></Link>
        </div>
    );
}

export default LogResButtons;