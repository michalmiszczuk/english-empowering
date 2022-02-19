import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

import Button from '../common/Button';
import Logo from '../common/Logo';
import NavBarIcon from './NavBarIcon';
import '../common/MainContainer.css';
import './NavUpperBar.css';


function NavUpperBar({ onSetMenu, onAboutMe, onLessons, onPricing, onCalendar, onReviews }) {

    const { user, logOut } = useContext(UserContext)

    return (
        <>
            <div className="desktop-visible">
                <div className="upper-bar" >
                    <div className="logo-text-container">
                        <Logo logoClass="main-logo" />
                        <div className="main-text">NAUKA JĘZYKA ANGIELSKIEGO</div>
                    </div>
                    <nav className="upper-bar-buttons">
                        <Button text="O mnie" onClick={onAboutMe} />
                        <Button text="Zajęcia" onClick={onLessons} />
                        <Button text="Opinie" onClick={onReviews} />
                        <Button text="Cennik" onClick={onPricing} />
                        {(!user || user.isAdmin) && <Link to="calendar" onClick={onCalendar}><Button text="Kalendarz" /></Link>}
                        {!user && <Link to="/login" className="btn-navbar-high">Zaloguj</Link>}
                        {!user && <Link to="/register" className="btn-navbar-high" >Zarejestruj</Link>}
                        {user && user.isAdmin && <Link to="/adminprofile"><Button text="Admin" /></Link>}
                        {user && !user.isAdmin && <Link to="/userprofile"><Button text="Moje konto" /></Link>}
                        {user && <Button text="Wyloguj" onClick={logOut} />}
                        {user && !user.isAdmin && <Link to="calendar" className='reserve-button'>{!user.isAdmin ? "Zapisz mnie" : "Kalendarz"}</Link>}
                    </nav>
                </div>
            </div >
            <div className="phone-visible">
                <div className="upper-bar">
                    <div className="upper-bar-1line">
                        <Logo logoClass="main-logo" />
                        <nav className="upper-buttons-phone">
                            {!user && <Link to="/login"><Button text="Zaloguj" btnClass="btn-navbar-high" /></Link>}
                            {!user && <Link to="/register"><Button text="Zarejestruj" btnClass="btn-navbar-high" /></Link>}
                            {user && user.isAdmin && <Link to="/adminprofile"><Button text="Admin" btnClass="btn-navbar-high" /></Link>}
                            {user && !user.isAdmin && <Link to="/userprofile"><Button text="Moje konto" btnClass="btn-navbar-high" /></Link>}
                            {user && <Button text="Wyloguj" btnClass="btn-navbar-high" onClick={logOut} />}
                            {user && !user.isAdmin && <Link to="calendar"><Button text={!user.isAdmin ? "Zapisz mnie" : "Kalendarz"} btnClass="reserve-button" /></Link>}
                        </nav>
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