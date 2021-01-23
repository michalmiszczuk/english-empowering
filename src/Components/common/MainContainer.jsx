import React, { useEffect } from 'react';

import Footer from '../Footer';
import NavBar from './NavBar';
import NavIcons from '../Home-Navigation/NavIcons';
import NavUpperBar from '../Home-Navigation/NavUpperBar';
import ShiftingDiv from './ShiftingDiv';
import useToggle from '../../hooks/toggler';
import './MainContainer.css'


function MainContainer({ children, upperBar, navBar, title }) {

    const [showMenu, toggleShowMenu] = useToggle(false)

    return (

        <div className="main-container">
            {upperBar && <NavUpperBar onSetMenu={toggleShowMenu} />}
            {navBar && <NavBar name={title} onSetMenu={toggleShowMenu} />}
            <NavIcons menu={showMenu} />
            <ShiftingDiv showMenu={showMenu}>
                {children}
                <Footer />
            </ShiftingDiv>
        </div>
    );
}

export default MainContainer;