import React from 'react';

import Footer from '../Footer';
import NavUpperBar from '../home-navigation/NavUpperBar';
import SideBar from '../home-navigation/SideBar';
import TopBar from './TopBar';
import useToggle from '../../hooks/toggler';
import './MainContainer.css'


function MainContainer({ children, upperBar, onAboutMe, topBar, title, onLessons, onPricing, onReviews }) {

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
                {topBar && <TopBar name={title} />}
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