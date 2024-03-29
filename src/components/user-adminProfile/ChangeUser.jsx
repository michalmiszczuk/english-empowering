import React, { useState } from 'react';

import './ChangeUser.css'
import './AdminProfile.css'

function ChangeUser({ users, user, onChangeUser, }) {

    const [showUsersList, setShowUsersList] = useState(false);

    if (!users || !user) return <div>NoUsers</div>

    const usersToRender = users.filter(user => !user.isAdmin)

    return (
        <div className="user-selector-container">
            <div id="user-selector-title">Wybierz ucznia</div>
            <div className={showUsersList ? "user-selector user-selector-full" : "user-selector"} onClick={() => setShowUsersList(!showUsersList)}>
                {showUsersList ? null : <div className="user-name-surname2">{user.name} {user.surname}</div>}
                <div className={showUsersList ? "users-list-expanded" : "users-list"}>
                    {usersToRender.map(user => <div key={user._id} onClick={() => onChangeUser(user)} className="one-user-select">{user.name} {user.surname}</div>)}
                </div>
            </div>
        </div>
    );
}

export default ChangeUser;