import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';

function MyAccountButton(props) {
    return (
        <Link to="/userprofile"><Button text="Moje konto" /></Link>
    );
}

export default MyAccountButton;