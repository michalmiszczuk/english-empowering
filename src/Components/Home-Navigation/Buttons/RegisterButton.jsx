import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';

function RegisterButton({ handleRegisterForm }) {
    return (
        <Link to="/register"><Button text="Zarejestruj" btnClass="btn-navbar-high" onClick={handleRegisterForm} /></Link>
    );
}

export default RegisterButton;