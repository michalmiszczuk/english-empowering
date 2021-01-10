import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../services/authServices';
import { getUser } from '../services/userServices';
import { UserContext } from './UserContext';

function UserProvider({ children }) {

    const [user, setUser] = useState();

    const logOut = () => {
        setUser(null)
        localStorage.removeItem('token')
    };

    async function refreshUser() {
        const user = getCurrentUser();
        if (!user._id) return;
        const { data } = await getUser(user._id);
        setUser(data);
    }

    useEffect(() => {
        refreshUser();
    }, []);

    return (

        <UserContext.Provider value={{ user, refreshUser, logOut }}>
            {children}
        </UserContext.Provider>

    );
}

export default UserProvider;