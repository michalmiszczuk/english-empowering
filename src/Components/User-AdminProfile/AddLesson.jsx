import React, { useState } from 'react';
import Button from '../common/Button';
import InputField from '../common/InputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { toMonthDayString, toWeekDayString } from '../../utils/toDateString';
import AddLessonScrollBar from './AddLessonScrollBar';
import "./AddLesson.css"
import { validateTime } from '../../Validation/joiValidation';
import { addLessonToUser } from '../../services/userServices';


function AddLesson({ iconClick, user, refreshLessons, refreshUser, setShowAddPage }) {

    const [inputHour, setInputHour] = useState("")
    const [inputMinutes, setInputMinutes] = useState("")
    const [chosenDate, setChosenDate] = useState("")

    const date = new Date(chosenDate)
    const dateName = toMonthDayString(date)
    const dayName = toWeekDayString(date)

    const [hoursError, minutesError] = validateTime(inputHour, inputMinutes)

    const submitAddLesson = async () => {
        await addLessonToUser(chosenDate, inputHour, inputMinutes, user)
        setShowAddPage();
        await refreshUser()
        await refreshLessons()
    }

    return (
        <div className="add-lesson-container">
            <FontAwesomeIcon icon={faTimes} id="close-icon" onClick={iconClick} />
            <AddLessonScrollBar
                dayMonth={chosenDate}
                dateName={dateName}
                dayName={dayName}
                dateChosen={(dayOfMonth) => setChosenDate(dayOfMonth)}
            />
            <InputField name={"Godzina:"} label={"Godzina:"} onChange={(event) => setInputHour(event.target.value)} error={hoursError} value={"inputHour"}></InputField>
            <InputField name={"Minuty:"} label={"Minuty:"} onChange={(event) => setInputMinutes(event.target.value)} error={minutesError} value={"inputMinutes"}></InputField>
            <Button text="Dodaj !" btnClass="admin-add-buttons" onClick={submitAddLesson} validError={!chosenDate || hoursError.error || minutesError.error} />
        </div>
    );
}

export default AddLesson