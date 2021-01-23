import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import { UserContext } from '../../../contexts/UserContext'


function ReserveLessonButton(props) {
    const { user } = useContext(UserContext)

    return (
        <Link to="calendar"><Button text={!user.isAdmin ? "Zapisz mnie" : "Kalendarz"} btnClass="reserve-button" /></Link>
    );
}

export default ReserveLessonButton;