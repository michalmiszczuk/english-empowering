import React from 'react';
import './PersonalUserInfo.css'

function PersonalInfo({ user }) {
    return (
        <div className="personal-info">
            Imię: {user.name} <br />
            Nazwisko: {user.surname} <br />
            Telefon: {user.phone} <br />
            E-mail: {user.email} <br />
        </div>
    );
}

export default PersonalInfo;