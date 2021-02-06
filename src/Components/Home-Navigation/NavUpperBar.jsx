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
import './NavUpperBar.css';
import '../common/MainContainer.css';
import { Link } from 'react-router-dom';


function NavUpperBar({ onSetMenu, onAboutMe, onLessons, onPricing, onCalendar, onContact }) {

    const { user, logOut } = useContext(UserContext)

    return (
        <>
            <div className="desktop-visible">
                <div className="upper-bar" >
                    <div className="logo-text-container">
                        <Logo logoClass="main-logo" />
                        <div className="main-text">NAUKA JĘZYKA ANGIELSKIEGO</div>
                    </div>
                    <div className="upper-bar-buttons">
                        {/* {user && <div id="welcome-msg" > Witaj {user.name} ! </div>} */}
                        <Button text="O mnie" onClick={onAboutMe} />
                        <Button text="Zajęcia" onClick={onLessons} />
                        <Button text="Cennik" onClick={onPricing} />
                        {(!user || user.isAdmin) && <Link to="calendar"><Button text="Kalendarz" onClick={onCalendar} /></Link>}
                        <Button text="Kontakt" onClick={onContact} />
                        {!user && <LoginButton />}
                        {!user && <RegisterButton />}
                        {user && user.isAdmin && <AdminButton />}
                        {user && !user.isAdmin && <MyAccountButton />}
                        {user && <LogOutButton onLogOut={logOut} />}
                        {user && !user.isAdmin && <ReserveLessonButton />}
                    </div>
                </div>
            </div >
            <div className="phone-visible">
                <div className="upper-bar">
                    <div className="upper-bar-1line">
                        <Logo logoClass="main-logo" />
                        <div className="upper-buttons-phone">
                            {!user && <LoginButton />}
                            {!user && <RegisterButton />}
                            {user && user.isAdmin && <AdminButton />}
                            {user && !user.isAdmin && <MyAccountButton />}
                            {user && <LogOutButton onLogOut={logOut} />}
                            {user && !user.isAdmin && <ReserveLessonButton />}
                        </div>
                        <div className="menu-button-phone">
                            <NavBarIcon onClick={onSetMenu} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default NavUpperBar;