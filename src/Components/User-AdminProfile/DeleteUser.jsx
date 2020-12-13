import React from 'react';
import { deleteUser } from '../../services/userServices';
import Button from '../common/Button';
import "./DeleteUser.css"


function DeleteUser({ onSubmitNo, user, refreshUsers }) {


    const handleDeleteUser = async () => {
        await deleteUser(user._id)
        refreshUsers()
    }

    return (
        <div className="delete-user-container">
            <div> Usuń użytkownika {user.name} {user.surname}. Czy jesteś pewny ?</div>
            <div className="delete-buttons">
                <Button btnClass='yes-button' text={"TAK"} onClick={handleDeleteUser} />
                <Button btnClass="no-button" text={"NIE"} onClick={onSubmitNo} />
            </div>
        </div>
    );
}

export default DeleteUser