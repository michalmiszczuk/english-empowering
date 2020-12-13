import React from 'react';
import joy from '../static/joy.jpg';
import books from '../static/books.jpg';
import lessonsText from '../static/LessonsText'
import MainContainer from './common/MainContainer';
import MainDescriptionElement from './Home-Navigation/MainDescriptionElement';
import "./Lessons.css";


function Lessons(props) {

    return (
        <MainContainer navBar title="O zajęciach">
            <div className="main-sea-photo">
                <p id="quote">“Smooth seas do not make skillful sailors.” ― African Proverb</p>
            </div>
            <MainDescriptionElement picture={joy} text={lessonsText} flowDirection="lessons-description-row" descriptionText="lessons-description-text" />
            <MainDescriptionElement picture={books} text={lessonsText} flowDirection="lessons-description-row row-reversed" descriptionText="lessons-description-text text-reversed" />
        </MainContainer>
    );
}

export default Lessons;

