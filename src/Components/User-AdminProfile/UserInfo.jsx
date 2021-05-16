import React from 'react';
import UserProgress from './UserProgress';
import './UserProfile.css'


function UserInfo({ user, handleSetLevel, noPointer }) {
    return (
        <div key={user._id} className="users-info">
            <UserProgress user={user} handleSetLevel={handleSetLevel} noPointer={noPointer} />
        </div>
    );
}

export default UserInfo;