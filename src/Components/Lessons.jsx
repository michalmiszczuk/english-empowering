import React from 'react';
import joy from '../static/joy.jpg';
import books from '../static/books.jpg';
import MainDescriptionElement from './Home-Navigation/MainDescriptionElement';
import useScrollUp from '../hooks/useScroller';
import "./Lessons.css";


function Lessons(props) {
    useScrollUp()


    return (
        <>
            <h1 data-aos="fade-up">O zajęciach</h1>
            <div className="main-sea-photo" data-aos="fade-up" >
                <p id="quote">“Smooth seas do not make skillful sailors.” ― African Proverb</p>
            </div>
            <div className="phone-main-text">
                <div data-aos="fade-up">
                    <MainDescriptionElement picture={joy} text={lessonsText} flowDirection="lessons-description-row" descriptionText="lessons-description-text" />
                </div>
                <div data-aos="fade-up">
                    <MainDescriptionElement picture={books} text={lessonsTextTwo} flowDirection="lessons-description-row lessons-row-reversed" descriptionText="lessons-description-text lessons-text-reversed" />
                </div>
            </div>
        </>
    );
}

export default Lessons;

const lessonsText = <p> Tak jak głosi to afrykańskie przysłowie nigdy się nie rozwiniemy jeśli nie
wyjdziemy ze swojej strefy komofortu. Dotyczy to wszystkich dziedzin życia, także nauki języków. Zajęcia u mnie
nastawione są na wychodzenie poza strefę komfortu, lecz jednocześnie dbając o to by poziom nie był za wysoki.
Dzięki wieloletniemu doświadczeniu już po kilku zajęciach wiem jak dobrze dobierać materiały i zadania pod
indywidualne potrzeby. U mnie na zajęciach nie ma nudnego przerabiania jednego podręcznika przez rok czasu.
Są ciągle nowe wyzwania, odkrywanie różnych tematów z najróżniejszych dziedzin.
</p>

const lessonsTextTwo = <p>  Pracując ze mną już na samym początku każdy wie gdzie się znajduje i ile mniej
więcej pracy trzeba włożyć, żeby się dostać do upragnionego celu, bez różnicy czy to jest swobodna komunikacja
bez błędów, wzorowe przejście rozmowy kwalifikacyjnej po angielsku czy też ogólny rozwój. Oczywiście to czy
ten cel zostanie osiągnięty w ustalonych ramach czasowych, czy też później, a może szybciej, zależy tylko
i wyłącznie od pracy własnej ucznia nad materiałami. Lektor jest tylko osobą, która prowadzi, poprawia błędy,
motywuje do pracy tak aby w końcu uczeń rozwiną w pełni skrzydła i przewyższył mistrza :)
</p>