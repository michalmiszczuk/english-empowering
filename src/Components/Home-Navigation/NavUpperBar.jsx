import React, { useContext } from 'react';
import { UserContext } from '../../hooks/UserContext';

import Button from '../common/Button';
import Logo from '../common/Logo';
import AdminButton from './Buttons/AdminButton';
import LoginButton from './Buttons/LoginButton';
import LogOutButton from './Buttons/LogOutButton';
import MyAccountButton from './Buttons/MyAccountButton';
import RegisterButton from './Buttons/RegisterButton';
import ReserveLessonButton from './Buttons/ReserveLessonButton';
import NavBarIcon from './NavBarIcon';
import './NavUpperBar.css'


function NavUpperBar({ handleLoginForm, handleRegisterForm, handleSetMenu }) {

    const { user, logOut } = useContext(UserContext)

    return (
        <>
            <div className="upper-bar" >
                <Logo />
                <div className="main-text">NAUKA JĘZYKA ANGIELSKIEGO</div>
                <div className="menu-button">
                    <Button onClick={handleSetMenu} btnClass="menu-button" ><NavBarIcon /></Button>
                </div>
                {user && <div id="welcome-msg"> Witaj {user.name} ! </div>}
                {!user && <LoginButton handleLoginForm={handleLoginForm} />}
                {!user && <RegisterButton handleRegisterForm={handleRegisterForm} />}
                {user && user.isAdmin && <AdminButton />}
                {user && !user.isAdmin && <MyAccountButton />}
                {user && <LogOutButton onLogOut={logOut} />}
                {user && <ReserveLessonButton />}
                <div className="main-text-phone">Nauka języka angielskiego</div>
            </div>
        </>
    );
}

export default NavUpperBar;