import React from 'react';

import Footer from '../Footer';
import NavBar from './NavBar';
import NavUpperBar from '../home-navigation/NavUpperBar';
import useToggle from '../../hooks/toggler';
import './MainContainer.css'
import SideBar from '../home-navigation/SideBar';


function MainContainer({ children, upperBar, onAboutMe, navBar, title, onLessons, onPricing, onReviews }) {

    const [showMenu, toggleShowMenu] = useToggle(false)

    return (
        <>
            <div className={showMenu ? "main-container main-blury" : "main-container"}>
                {upperBar && <NavUpperBar
                    onAboutMe={onAboutMe}
                    onLessons={onLessons}
                    onPricing={onPricing}
                    onReviews={onReviews}
                    onSetMenu={toggleShowMenu} />}
                {navBar && <NavBar name={title} />}
                <div className="main-body">
                    {children}
                    <Footer />
                </div>
            </div >
            <SideBar menu={showMenu}
                onCloseIcon={() => toggleShowMenu(false)}
                onAboutMe={() => { onAboutMe(); toggleShowMenu(false) }}
                onLessons={() => { onLessons(); toggleShowMenu(false) }}
                onPricing={() => { onPricing(); toggleShowMenu(false) }}
                onReviews={() => { onReviews(); toggleShowMenu(false) }}
            />
        </>
    );
}

export default MainContainer;