import React from 'react';
import InputField from './InputField';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "../CSS/AddLesson.css"
import get14days from "../../utils/getDates"
import { useState } from 'react';


function AddLesson({ iconClick, onSubmit, onChange, dateChosen, dayMonth }) {
    const [showDatesList, setShowUsersList] = useState(false);

    const { dMonth: dateName, dName: dayName } = dayMonth
    const dates = get14days;

    let daysMonth = []
    let dayToRender = {}
    for (let date of dates) {
        let dayMonth = date.toLocaleDateString("default", { month: "long", day: "numeric" })
        let dayName = date.toLocaleDateString("default", { weekday: "long" })
        dayToRender = { dMonth: dayMonth, dName: dayName }
        daysMonth.push(dayToRender)
    }

    const dateSelectorClasses = showDatesList ? "datesSelectorFull" : "datesSelector";

    return (
        <div className="addLessonCont">
            <FontAwesomeIcon icon={faTimes} id="closeIcon" onClick={iconClick} />
            <div id="addLessonTitle"> Dodaj lekcję</div>
            <div className={dateSelectorClasses}
                onClick={() => showDatesList ? setShowUsersList(false) : setShowUsersList(true)}>
                {!dayMonth ? <div >Wybierz datę</div> : <><div>{dateName}</div><div>{dayName}</div></>}
                <div className={showDatesList ? "datesListExpanded" : "datesList"}>
                    {daysMonth.map(day => <div key={day.dMonth} className="oneDateSelect" onClick={() => dateChosen(day)}>{day.dMonth} {day.dName}</div>)}
                </div>
            </div>
            <InputField name={"Godzina:"} label={"Godzina:"} onChange={onChange}></InputField>
            <Button width={200} height={80} text="Dodaj !" backgroundColor={"peru"} marginTop={10} onClick={onSubmit} />
        </div>
    );
}

export default AddLesson