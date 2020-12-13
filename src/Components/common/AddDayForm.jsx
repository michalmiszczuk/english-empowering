import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import getYearMonthDay from '../../utils/getYearMonthDay';
import { saveLesson } from '../../services/lessonServices';
import { toWeekDayString } from '../../utils/toDateString';
import { validateTime } from '../../Validation/joiValidation';
import "./AddDayForm.css";


function AddDayForm({ iconClick, currentDay, onAddLessonSubmit }) {

    const [inputHour, setInputHour] = useState("")
    const [inputMinutes, setInputMinutes] = useState("")
    const [errorMsg, setErrorMsg] = useState('')

    const [hoursError, minutesError] = validateTime(inputHour, inputMinutes)

    const submitAddLesson = async (e) => {
        try {
            e.preventDefault();
            const newLessonTime = getYearMonthDay(currentDay, inputHour, inputMinutes)
            const lessonSave = { date: newLessonTime, isReserved: false, isDisabled: false }
            await saveLesson(lessonSave)
            onAddLessonSubmit()
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                setErrorMsg(ex.response.data)
            }
        }
    }

    const dateObject = new Date(currentDay)
    const dayName = toWeekDayString(dateObject)

    let checkWeekend = (dayName === "sobota") ? `add-day-form-cont sobota` : (dayName === "niedziela") ?
        `add-day-form-cont niedziela` : `add-day-form-cont`;

    return (
        <div className={checkWeekend}>
            <FontAwesomeIcon icon={faTimes} onClick={iconClick} className="close-icon-add-day" />
            <div className="add-dayform-title"> Dodaj lekcję</div>
            <InputField addDayForm name={"Godzina:"} label={"Godzina:"} onChange={(event) => setInputHour(event.target.value)} error={hoursError} value={"inputHour"}></InputField>
            {errorMsg && <div className="error-msg-day-form">{errorMsg}</div>}
            <InputField addDayForm name={"Minuty:"} label={"Minuty:"} onChange={(event) => setInputMinutes(event.target.value)} error={minutesError} value={"inputMinutes"}></InputField>
            <Button text="Dodaj!" btnClass="secondary" onClick={submitAddLesson} />
        </div>
    );
}

export default AddDayForm