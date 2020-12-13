import React from 'react';
import ChangeUser from './ChangeUser';
import DeleteUserButton from './DeleteUserButton';
import PersonalInfo from './PersonalUserInfo';
import UserProgress from './UserProgress';
import './AdminUsersInfo.css'

function AdminUsersInfo({ user, users, handleDeletePage, handleChangeUser, refreshUser }) {
    return (
        <div className="admin-users-info">
            <ChangeUser
                user={user}
                users={users}
                handleChangeUser={handleChangeUser}
            />
            <PersonalInfo user={user} />
            <UserProgress user={user} refreshUser={refreshUser} />
            <DeleteUserButton onClick={handleDeletePage} />
        </div>
    );
}



export default AdminUsersInfo;