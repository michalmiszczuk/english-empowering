import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import books from '../../static/books.jpg'
import blog from '../../static/blog.jpg'
import calendar from '../../static/calendar.jpg';
import contact from "../../static/contact.jpg"
import dollar from '../../static/dollars.jpg'
import NavCard from './NavCard';
import profilePic from '../../static/profilePic.jpg'
import './NavIcons.css'
import { LoadingContext } from '../../contexts/LoadingContext';

function NavIcons({ menu }) {

    const { setisLoading } = useContext(LoadingContext)

    return (
        <div className={menu ? "icons-container" : "icons-container hidden"}>
            <Link className="link-button" to="/aboutme"><NavCard image={profilePic} description={"O MNIE"} /></Link>
            <Link className="link-button" to="/lessons"><NavCard image={books} description={"LEKCJE"} backYposition={"95%"} /></Link>
            <Link className="link-button" to="/pricing"><NavCard image={dollar} description={"CENNIK"} /></Link>
            <Link className="link-button" to="/calendar"><NavCard image={calendar} description={"KALENDARZ"} /></Link>
            <a className="link-button" href="https://www.facebook.com/English-Empowering-105936414259466">
                <NavCard image={blog} description={"BLOG"} backYposition={"60%"} /></a>
            <Link className="link-button" to="/contact"><NavCard image={contact} description={"KONTAKT"} /></Link>
        </div >
    );
}

export default NavIcons;