import React from 'react';
import { useState } from 'react';
import Footer from '../Footer';
import NavBar from './NavBar';
import NavIcons from '../Home-Navigation/NavIcons';
import NavUpperBar from '../Home-Navigation/NavUpperBar';
import ShiftingDiv from './ShiftingDiv';
import './MainContainer.css'

function MainContainer({ children, upperBar, user, handleLogOut, handleRegisterForm, handleLoginForm, navBar, title }) {

    const [showMenu, setShowMenu] = useState(false)
    // const [showMenu, toggleShowMenu] = useToggle(false)
    // toggleShowMenu();

    return (

        <div className="main-container">
            {upperBar && <NavUpperBar user={user}
                handleLogOut={handleLogOut}
                handleSetMenu={() => setShowMenu(!showMenu)}
                handleRegisterForm={handleRegisterForm}
                handleLoginForm={handleLoginForm} />}
            {/* {navBar && <NavBar name={title} handleSetMenu={toggleShowMenu} />}     */}
            {navBar && <NavBar name={title} handleSetMenu={() => setShowMenu(!showMenu)} />}
            <NavIcons menu={showMenu} />
            <ShiftingDiv showMenu={showMenu}>
                {children}
                <Footer />
            </ShiftingDiv>
        </div>
    );
}

export default MainContainer;