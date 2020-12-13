import React from 'react';
import Button from '../../common/Button';

function LogOutButton({ onLogOut }) {
    return (
        <Button text="Wyloguj" onClick={onLogOut} />
    );
}

export default LogOutButton;