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

const lessonsText = <p> Tak jak głosi to afrykańskie przysłowie można przyjąć, że nigdy się nie rozwiniemy jeśli nie
wyjdziemy ze swojej strefy komofortu. Dotyczy to wszystkich dziedzin życia, także nauki języków. Zajęcia u mnie
nastawione są na wychodzenie poza strefę komfortu, lecz jednocześnie dbając o to by ich poziom był dopasowany pod każdego ucznia.
Dzięki wieloletniemu doświadczeniu już po kilku zajęciach potrafię ocenić jakie materiały i zadania dobrać pod
indywidualne potrzeby. Na pewno nie doświadczysz nudnego przerabiania jednego podręcznika przez rok czasu.
Natomiast będą ciągle nowe wyzwania i odkrywanie różnych tematów z najróżniejszych dziedzin.
</p>

const lessonsTextTwo = <p>  Rozpoczynając pracę ze mną, już na samym początku pomogę Ci dowiedzieć się, jaki jest poziom Twoich umiejętności,
obierzemy cel, jaki chciałbyś osiągnąć, a następnie zaczniemy go realizować szacując, ile czasu zajmie nam zdobycie go.
Tutaj nie ma różnicy, czy chcesz nauczyć się umiejętności swobodnej, bezbłędnej komunikacji, wzorowego przejścia rozmowy kwalifikacyjnej,
czy po prostu – popchnąć do przodu swój rozwój. Na moich zajęciach, wszystko jest możliwe do zrealizowania. Ale już teraz pragnę podkreślić,
że to, czy wyznaczony przez nas cel zostanie osiągnięty w ustalonych ramach czasowych, czy też później (a może szybciej!),
zależy tylko i wyłącznie od Twojej własnej pracy nad powierzonymi Ci materiałami. Lektor jest osobą, która prowadzi, poprawia błędy,
motywuje do pracy tak, aby uczeń mógł w pełni rozwinąć skrzydła i oczywiście – przewyższyć mistrza  :)
</p>