import React from 'react';
import joy from '../static/joy.jpg';
import books from '../static/books.jpg';
import "./CSS/Lessons.css";
import Footer from "./Footer.jsx"

import NavBar from './NavBar';

function Lessons(props) {
    return (
        <div className="mainClassesContainer" >
            <NavBar name="Lessons" />
            <div className="mainPhoto">
                <p id="quote">“Smooth seas do not make skillful sailors.”

― African Proverb</p></div>
            <div className="descriptionRow">
                <div className="descriptionText">{lessonsText}</div>
                <div className="pictureContainer" id="classPic1">
                    <img src={joy} alt="" className="bookMePic" style={{ maxHeight: "80%", maxWidth: "80%", borderRadius: 100 }} />
                </div>
            </div>
            <div className="descriptionRow">
                <div className="pictureContainer" id="classPic2">
                    <img src={books} alt="" className="bookMePic" style={{ maxHeight: "80%", maxWidth: "80%", borderRadius: 100 }} />
                </div>
                <div className="descriptionText">{lessonsText}</div>
            </div>
            <Footer />
        </div >
    );
}

export default Lessons;

const lessonsText = <p> Tak jak to głosi to afrykańskie przysłowie nigdy się nie rozwiniemy jeśli nie
wyjdziemy ze swojej strefy komofortu. Dotyczy to wszystkich dziedzin życia, także nauki języków. Zajęcia u mnie
nastawione są na wychodzenie poza strefę komfortu, lecz jednocześnie dbając o to by poziom nie był za wysoki.
Dzięki wieloletniemu doświadczeniu już po kilku zajęciach wiem jak dobrze dobierać materiały i zadania pod
indywidualne potrzeby. U mnie na zajęciach nie ma nudnego przerabiania jednego podręcznika przez rok czasu.
Są ciągle nowe wyzwania, odkrywanie różnych tematów z najrózniszejszych dziedzin.
</p>
