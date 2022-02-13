import React from 'react';
import './UserProfile.css'

function PersonalInfo({ user, admin }) {
    if (!user) return <div>No users</div>

    return (
        <div className={admin ? "personal-info-admin" : "personal-info"}>
            Imię: {user.name} <br />
            Nazwisko: {user.surname} <br />
            Telefon: {user.phone} <br />
            E-mail: {user.email} <br />
        </div>
    );
}

export default PersonalInfo;