import React, { useState } from 'react';
import get14days from "../../utils/getDates"
import { toMonthDayString, toWeekDayString } from '../../utils/toDateString';
import './AddLessonScrollBar.css'

function AddLessonScrollBar({ dayMonth, dateName, dayName, dateChosen }) {

    const [showDatesList, setShowDatesList] = useState(false);

    const dates = get14days;

    let daysMonth = []
    let dayToRender = {}
    for (let date of dates) {
        let dayMonth = toMonthDayString(date)
        let dayName = toWeekDayString(date)
        dayToRender = { dMonth: dayMonth, dName: dayName, date: date }
        daysMonth.push(dayToRender)
    }

    return (
        <>
            <div id="add-lesson-title"> Dodaj lekcję</div>
            <div className={showDatesList ? "dates-selector-full" : "dates-selector"}
                onClick={() => showDatesList ? setShowDatesList(false) : setShowDatesList(true)}>
                {!dayMonth ? <div >Wybierz datę</div> : <><div>{dateName}</div><div>{dayName}</div></>}
                <div className={showDatesList ? "dates-list-expanded" : "dates-list"}>
                    {daysMonth.map(day => <div key={day.dMonth} className="one-date-select" onClick={() => dateChosen(day.date)}>{day.dMonth} <br /> {day.dName}</div>)}
                </div>
            </div>
        </>
    );
}

export default AddLessonScrollBar;