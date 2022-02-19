import React from 'react';
import joy from '../../static/joy.jpg';
import books from '../../static/books.jpg';
import MainDescriptionElement from '../home-navigation/MainDescriptionElement';
import "./Lessons.css";
import { lessonsText, lessonsText2 } from '../../static/Txt/texts';


function Lessons({ lessons }) {

    return (
        <section ref={lessons}>
            <h1 data-aos="fade-up">O zajęciach</h1>
            <div className="main-sea-photo" data-aos="fade-up" >
                <p id="quote">“Smooth seas do not make skillful sailors.” ― African Proverb</p>
            </div>
            <div className="phone-main-text">
                <div data-aos="fade-up">
                    <MainDescriptionElement picture={joy} text={lessonsText} flowDirection="lessons-description-row" descriptionText="lessons-description-text" />
                </div>
                <div data-aos="fade-up">
                    <MainDescriptionElement picture={books} text={lessonsText2} flowDirection="lessons-description-row lessons-row-reversed" descriptionText="lessons-description-text lessons-text-reversed" />
                </div>
            </div>
        </section>
    );
}

export default Lessons;
