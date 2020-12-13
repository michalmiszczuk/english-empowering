import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';

function ReserveLessonButton(props) {
    return (
        <Link to="calendar"><Button text="Zapisz mnie" /></Link>
    );
}

export default ReserveLessonButton;