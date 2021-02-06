import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/Button';

function LoginButton(pros) {
    return (
        <Link to="/login"><Button text="Zaloguj" btnClass="btn-navbar-high" /></Link>);
}

export default LoginButton;