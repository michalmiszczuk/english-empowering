import React from 'react';

import Footer from '../Footer';
import NavBar from './NavBar';
import NavUpperBar from '../Home-Navigation/NavUpperBar';
import useToggle from '../../hooks/toggler';
import './MainContainer.css'
import SideBar from '../Home-Navigation/SideBar';


function MainContainer({ children, upperBar, onAboutMe, navBar, title, onLessons, onPricing, onContact }) {

    const [showMenu, toggleShowMenu] = useToggle(false)

    return (
        <>
            <div className={showMenu ? "main-container main-blury" : "main-container"}>
                <div>
                    {upperBar && <NavUpperBar
                        onAboutMe={onAboutMe}
                        onLessons={onLessons}
                        onPricing={onPricing}
                        onContact={onContact}
                        onSetMenu={toggleShowMenu} />}
                    {navBar && <NavBar name={title} />}
                </div>
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
                onContact={() => { onContact(); toggleShowMenu(false) }} />
        </>
    );
}

export default MainContainer;