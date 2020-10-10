import React from 'react';
import inStudioPicture from "../static/I/meInStudio.jpg"
import Me from "../static/I/Me.jpg"
import MeDrums from "../static/I/meDrums.jpg"
import book from "../static/I/beHappy.jpg"
import "./CSS/AboutMe.css"
import NavBar from './NavBar';
import Footer from './Footer';


function AboutMe(props) {
    return (
        <div className="AboutMeContainer" >
            <NavBar name="O mnie" />
            <div id="aboutMeMainPhoto">
                <img src={MeDrums} alt="" className="mainPic" />
                <img src={inStudioPicture} alt="" className="mainPic" />
                <img src={book} alt="" className="mainPic" />
            </div>
            <div className="firstRowDiv">
                <div className="firstPicture">
                    <img src={Me} alt="" id="pictureOne" />
                </div>
                <div className="textDiv">{aboutMeTextPl} {aboutMeTextPl}</div>
            </div>
            <Footer />
        </div >
    );
}

export default AboutMe;

const aboutMeTextPl = <p> Jestem absolwentem filologii angielskiej  - specjalizacja nauczycielska.
Autorem anglojęzycznej książki „Be Happy, Then Live.” Od ponad 9 lat zajmuje się korepetycjami, przygotowuje do różnych egzaminów,
zaczynając od gimnazjalnego, poprzez matury, wojskowy egzamin STANAG, kończąc na certyfikatach Cambridge czy też IELTS.
Przekazywanie wiedzy to moja pasja, która przynosi mu radość. Lubię szukać sposobów na tłumaczenie trudnych zagadnień w jak najbardziej
prosty i logiczny sposób. <span role="img" aria-label="smile">🙂</span> Pomagam też oczywiście przełamywać wszelkie bariery w mówieniu <span role="img" aria-label="smile">🙂</span> Bazuje na materiałach autentycznych takich jak
np. konferencje TED, różne ciekawe filmy z Youtube. A szerokie spektrum moich zainteresowań pozwala na dobranie odpowiednich
tematów pod każdego: zaczynając od filmów, muzyki, literatury, poprzez politykę, ekonomię, kończąc na fizyce kwantowej </p>