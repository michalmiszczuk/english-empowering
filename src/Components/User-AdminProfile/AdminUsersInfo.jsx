import React from 'react';

import ChangeUser from './ChangeUser';
import DeleteUserButton from './DeleteUserButton';
import UserProgress from './UserProgress';
import PersonalInfo from './PersonalUserInfo';
import './AdminProfile.css'

function AdminUsersInfo({ user, users, onShowDeletePage, onChangeUser, refreshUser }) {
    return (
        <div className="admin-users-info">
            <ChangeUser
                user={user}
                users={users}
                onChangeUser={onChangeUser}
            />
            <PersonalInfo admin user={user} />
            <UserProgress admin user={user} refreshUser={refreshUser} />
            <DeleteUserButton onClick={onShowDeletePage} />
        </div>
    );
}



export default AdminUsersInfo;