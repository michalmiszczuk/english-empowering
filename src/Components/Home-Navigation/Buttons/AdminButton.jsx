import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';

function AdminButton({ noTextDec }) {
    return (
        <Link to="/adminprofile"><Button text="Admin" /></Link>
    );
}

export default AdminButton;