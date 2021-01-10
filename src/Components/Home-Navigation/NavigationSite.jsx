import React, { useContext } from 'react';
import NavBottomButtons from './NavBottomButtons';
import MainDescriptionElement from './MainDescriptionElement';
import MainHeader from './MainHeader';

import book from '../../static/newbook.jpg'
import pictureMe from '../../static/profilePic.jpg'
import MainContainer from '../common/MainContainer'
import "./NavigationSite.css"
import { LoadingContext } from '../../contexts/LoadingContext';


function NavigationSite({ user, handleLogOut }) {

    const { setisLoading } = useContext(LoadingContext)

    if (!book || !pictureMe) setisLoading(true);

    return (

        <MainContainer upperBar user={user} handleLogOut={handleLogOut}>
            <MainHeader />
            <MainDescriptionElement picture={book} text={sampleText} flowDirection="description-row" descriptionText="description-text" />
            <MainDescriptionElement picture={pictureMe} text={sampleText2} flowDirection="description-row row-reversed" descriptionText="description-text text-reversed" />
            <NavBottomButtons />
        </MainContainer>
    );
}

export default NavigationSite;


const sampleText = <p>Czy kiedykolwiek uczyłeś się angielskiego i nie widziałeś żadnego rezulatatu, albo postępy były niewielkie ? <br /> <br />
A może masz już dość kursów językowych czy przerabiania przez miesiące tej samej książki strona po stronie ? <br /> <br />
Dlaczego jedni po roku czasu przeskakują z poziomu A2 na B2, a inni nie mogą tego zrobić przez kilka lat ?

</p>

const sampleText2 = <p>
    Potrzebujesz solidnego planu nauki w którym będzie śledził swoje postępy ?
    <br /> <br /> Prostych wyjaśnień skomplikowanych rzeczy ? Dużo praktyki w mówieniu ?
    <br /> <br /> Trafiłeś w dobre miejsce :)

</p>
