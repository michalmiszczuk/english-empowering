import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./CSS/NavigationSite.css"

import picture from '../static/newbook.jpg'
import MePic from '../static/profilePic.jpg'
import logo from "../static/englogo2.jpg"
import NavCard from './NavCard';
import profilePic from '../static/profilePic.jpg'
import books from '../static/books.jpg'
import dollar from '../static/dollars.jpg'
import blog from '../static/blog.jpg'
import Button from './Button';
import calendar from '../static/calendar.jpg';
import contact from "../static/contact.jpg"

import LoginForm from './common/LoginForm';
import RegisterForm from './common/RegisterForm';
import Footer from './Footer';
import MainHeader from './MainHeader';



function NavBar({ user, handleLogOut, admin }) {


    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showRegisterForm, setshowRegisterForm] = useState(false)

    const handleLoginClick = () => showLoginForm ? setShowLoginForm(false) : (setshowRegisterForm(false), setShowLoginForm(true));
    const handleRegisterClick = () => showRegisterForm ? setshowRegisterForm(false) : (setShowLoginForm(false), setshowRegisterForm(true));

    return (
        <div>
            <div className="mainContainer" style={{
                filter: showLoginForm || showRegisterForm ? "blur(3px)" : "none",
            }}>
                <div className="upperBar" >
                    <img id="logo"
                        src={logo} width={180} height={100} alt="" />
                    {!user && <div className="navUpButtons">
                        <Button width={150} height={50}
                            backgroundColor="black"
                            text="ZALOGUJ"
                            marginRight={20}
                            onClick={handleLoginClick}
                            textColor="oldlace"
                        /></div>}
                    {!user && <div className="navUpButtons"><Button width={180} height={50}
                        backgroundColor="black"
                        text={"ZAREJESTRUJ"}
                        marginRight={50}
                        textColor="oldlace"
                        onClick={handleRegisterClick}
                    /></div>}
                    {user && <div id="welcomeMsg"> Witaj {user.name} ! </div>}
                    {user && admin && <div className="navUpButtons"><Link style={noTextDec} to="/adminprofile"><Button width={180} height={50}
                        backgroundColor="black"
                        text="Admin"
                        marginRight={20}
                        textColor="oldlace"
                    /></Link></div>}
                    {user && <div className="navUpButtons"><Link style={noTextDec} to="/userprofile"><Button width={180} height={50}
                        backgroundColor="black"
                        text="MOJE KONTO"
                        marginRight={20}
                        textColor="oldlace"
                        onClick={handleLoginClick}
                    /></Link></div>}
                    {user && <div className="navUpButtons"><Button width={180} height={50}
                        backgroundColor="black"
                        text="WYLOGUJ"
                        marginRight={50}
                        textColor="oldlace"
                        onClick={handleLogOut}
                    /></div>}
                </div>
                <div className="iconsContainer" style={styles.iconsContainer}>
                    <Link style={noTextDec} to="/aboutme"><NavCard image={profilePic} description={"O MNIE"} /></Link>
                    <Link style={noTextDec} to="/lessons"><NavCard image={books} description={"LEKCJE"} bpY={"95%"} /></Link>
                    <Link style={noTextDec} to="/pricing"><NavCard image={dollar} description={"CENNIK"} /></Link>
                    <Link style={noTextDec} to="/calendar"><NavCard image={calendar} description={"KALENDARZ"} /></Link>
                    <Link style={noTextDec} to="/blog"><NavCard image={blog} description={"BLOG"} bpY={"60%"} /></Link>
                    <Link style={noTextDec} to="/contact"><NavCard image={contact} description={"KONTAKT"} /></Link>
                </div>
                <MainHeader />
                <div className="descriptionRow">
                    <div className="descriptionText">{sampleText}</div>
                    <div className="pictureContainer">
                        <div className="bookMePic" style={{ backgroundImage: `url("${picture}")` }}> </div>
                    </div>
                </div>
                <div className="descriptionRow">
                    <div className="pictureContainer">
                        <div className="bookMePic" style={{ backgroundImage: `url("${MePic}")` }}></div>
                    </div>
                    <div className="descriptionText" id="secondText">{sampleText2}</div>
                </div>
                <div className="navigationBottomButtons">
                    <div style={{ color: "black", fontSize: 40, width: "100%", textAlign: "center" }}>Dowiedz się więcej:</div>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-around", paddingBottom: 40 }}>
                        <Link style={noTextDec} to="/aboutme" id="bottomBtn"><Button width={280} height={120}
                            backgroundColor="black"
                            text="O MNIE"
                            onClick={handleLoginClick}
                            textColor="white"
                            fontSize={24}
                        /></Link>
                        <Link style={noTextDec} to="/lessons"><Button width={280} height={120}
                            backgroundColor="black"
                            text="O ZAJĘCIACH"
                            onClick={handleLoginClick}
                            textColor="white"
                            fontSize={24}
                        /></Link>
                    </div>
                </div>
                <Footer />
            </div>

            <div id="mainTopRightForms" style={{
                position: "absolute",
                top: 150,
                right: 50,
            }}>
                {showLoginForm && <LoginForm iconClick={handleLoginClick} />}
                {showRegisterForm && <RegisterForm iconClick={handleRegisterClick} />}
            </div>
        </div >
    );
}

export default NavBar;

const styles = {
    logo: {

    },

    text: {
        marginLeft: 20,
        marginRight: "auto",
        fontFamily: "Indie Flower, cursive",
        fontWeight: 100,
        fontSize: 50,
        color: "cornsilk",
        opacity: 1,

    },
}

const noTextDec = {
    textDecoration: "none"
}

const sampleText = <p>Czy kiedykolwiek uczyłeś się i nie widziałeś żadnego rezulatatu, albo postępy były niewielkie ? <br /> <br />
A może masz już dość kursów języków czy przerabiania przez miesiące tej samej książki strona po stronie ? <br /> <br />
Dlaczego jedni po roku czasu przeskakują z poziomu A2 na B2, a inni nie mogą tego zrobić przez kilka lat ? <br /> <br />

</p>

const sampleText2 = <p>
    Potrzebujesz soldinego planu nauki w którym będzie śledził swoje postępy ? Prostych wyjaśnień skomplikowanych rzeczy ? Dużo praktyki w mówieniu ? Trafiłeś w dobre miejsce :) <br /> <br />
    Posiadając duże doświadczenie w przekazywaniu wiedzy i pracy z różnymi osobami.
pozwoliły mi wypracować orginalny styl nauki dopasowany pod indywidualne potrzeby. Każdy jest inny,
    więc sposób nauki też musi być inny. <br /> <br />
</p>