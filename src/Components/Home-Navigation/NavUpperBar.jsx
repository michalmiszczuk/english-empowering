import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import AdminButton from './Buttons/AdminButton';
import Button from '../common/Button';
import Logo from '../common/Logo';
import LoginButton from './Buttons/LoginButton';
import LogOutButton from './Buttons/LogOutButton';
import MyAccountButton from './Buttons/MyAccountButton';
import NavBarIcon from './NavBarIcon';
import RegisterButton from './Buttons/RegisterButton';
import ReserveLessonButton from './Buttons/ReserveLessonButton';
import './NavUpperBar.css'


function NavUpperBar({ onSetMenu }) {

    const { user, logOut } = useContext(UserContext)
    const menuUser = user ? "menu-button" : "menu-button-phone"
    const menuNoUser = !user ? "menu-button" : "menu-button-phone"

    return (
        <>
            <div className="upper-bar" >
                <Logo logoClass="main-logo" />
                <div className="main-text">NAUKA JĘZYKA ANGIELSKIEGO</div>
                <div className={menuUser}>
                    <Button onClick={onSetMenu} btnClass={menuUser} ><NavBarIcon /></Button>
                </div>
                {user && <div id="welcome-msg"> Witaj {user.name} ! </div>}
                {!user && <LoginButton />}
                {!user && <RegisterButton />}
                {user && user.isAdmin && <AdminButton />}
                {user && !user.isAdmin && <MyAccountButton />}
                {user && <LogOutButton onLogOut={logOut} />}
                {user && <ReserveLessonButton />}
                <div className="main-text-phone">Nauka języka angielskiego</div>
                <div className={menuNoUser}>
                    <Button onClick={onSetMenu} btnClass={menuNoUser} ><NavBarIcon /></Button>
                </div>
            </div >
        </>
    );
}

export default NavUpperBar;