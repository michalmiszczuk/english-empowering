import React, { useContext } from 'react';

import Button from '../common/Button';
import { deleteUser } from '../../services/userServices';
import { LoadingContext } from '../../contexts/LoadingContext';
import { ToastContext } from '../../contexts/ToastContext';

import "./AdminProfile.css"
import "./DeleteUser.css"


function DeleteUser({ onSubmitNo, user, refreshUsers }) {
    const { showToast } = useContext(ToastContext)
    const { setIsLoading } = useContext(LoadingContext)

    const handleDeleteUser = async () => {
        try {
            setIsLoading(true)
            await deleteUser(user._id)
            refreshUsers()
            showToast('success', `Użytkownik ${user.name} ${user.surname} został usunięty.`)
            setIsLoading(false)
        } catch (ex) {
            setIsLoading(false)
            if (ex.response && ex.response.status === 400) showToast('error', ex.response.data)
        }
    }

    return (
        <div className="delete-user-container">
            <div> Usuń użytkownika {user.name} {user.surname}. Czy jesteś pewny ?</div>
            <div className="delete-buttons">
                <Button btnClass='yes-button' text="TAK" onClick={handleDeleteUser} />
                <Button btnClass="no-button" text="NIE" onClick={onSubmitNo} />
            </div>
        </div>
    );
}

export default DeleteUser