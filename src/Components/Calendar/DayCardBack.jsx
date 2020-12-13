import React, { useState } from 'react';

import AddDayForm from '../common/AddDayForm';
import DayCardContainer from './DayCardContainer';
import CheckedRules from './CheckedRules';
import LogResButtons from './LogResButtons';
import YesNoButtons from './YesNoButtons';

import './DayCardBack.css'


function DayCardBack({ currentDay, handleShowAddDay, lessonTime, onReserve, setRotated, showAddDay, onAddLessonSubmit, user }) {


    const [checkedRules, setCheckedRules] = useState(false)
    const [markedError, setMarkedError] = useState(false)

    const onReserveLesson = () => {
        onReserveLesson && checkedRules ? onReserve() : setMarkedError(true)
    }

    const handleSetCheckRules = () => {
        checkedRules ? setCheckedRules(false) : setCheckedRules(true);
    }
    // console.log(currentDay)
    return (
        <div>
            {user && !showAddDay && <DayCardContainer date={currentDay} direction="back">
                <div className="reserve-text">Rezerwujesz lekcję na godzinę {lessonTime} Czy jesteś pewny ?</div>
                <YesNoButtons onReserve={onReserveLesson} checkedRules={checkedRules} setRotatedFalse={setRotated} />
                <CheckedRules checkedRules={checkedRules} markedError={markedError} handleSetCheckRules={handleSetCheckRules} />
            </DayCardContainer>}
            {!user && !showAddDay && <DayCardContainer date={currentDay} direction="back">
                <div className="lessons-container back-card-container">
                    <div className="reserve-text">Aby zarezerwować lekcję zaloguj się albo zarejestruj</div>
                    <LogResButtons />
                </div >
            </DayCardContainer>}
            {showAddDay && <DayCardContainer date={currentDay} direction="back">
                <AddDayForm
                    iconClick={handleShowAddDay}
                    currentDay={currentDay}
                    onAddLessonSubmit={onAddLessonSubmit}
                    date={currentDay}
                />
            </DayCardContainer>}
        </div>
    );
}

export default DayCardBack;