import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import './NavButtons.css'

function LoginButton(pros) {
    return (
        <Link to="/login"><Button text="Zaloguj" /></Link>);
}

export default LoginButton;