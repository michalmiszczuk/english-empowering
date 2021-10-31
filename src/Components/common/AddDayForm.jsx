import React, { useContext, useState } from 'react';

import Button from './Button';
import InputField from './InputField';

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LoadingContext } from '../../contexts/LoadingContext';
import { saveLesson } from '../../services/lessonServices';
import { ToastContext } from '../../contexts/ToastContext'
import { toMonthDayString, toWeekDayString } from '../../utils/toDateString';
import { validateTime } from '../../Validation/joiValidation';

import getYearMonthDay from '../../utils/getYearMonthDay';
import "./AddDayForm.css";


function AddDayForm({ iconClick, currentDay, onAddLessonSubmit }) {

    const [inputHour, setInputHour] = useState("")
    const [inputMinutes, setInputMinutes] = useState("")
    const { showToast } = useContext(ToastContext)
    const { setIsLoading } = useContext(LoadingContext)

    const [hoursError, minutesError] = validateTime(inputHour, inputMinutes)

    const submitAddLesson = async (e) => {
        try {
            setIsLoading(true)
            e.preventDefault();
            const newLessonTime = getYearMonthDay(currentDay, inputHour, inputMinutes)
            const lessonSave = { date: newLessonTime, isReserved: false, isDisabled: false }
            await saveLesson(lessonSave)
            onAddLessonSubmit()
            const date = toMonthDayString(currentDay)
            showToast('success', `Dodano lekcję dnia ${date} na godzinę ${inputHour}:${inputMinutes}.`)
            setIsLoading(false)
        }
        catch (ex) {
            setIsLoading(false)
            if (ex.response && ex.response.status === 400) showToast('error', ex.response.data)
        }
    }

    const dateObject = new Date(currentDay)
    const dayName = toWeekDayString(dateObject)

    let checkWeekend = (dayName === "sobota") ? `add-day-form-cont sobota` : (dayName === "niedziela") ?
        `add-day-form-cont niedziela` : `add-day-form-cont`;

    return (
        <form className={checkWeekend}>
            <FontAwesomeIcon icon={faTimes} onClick={iconClick} className="close-icon-add-day" />
            <div className="add-dayform-title"> Dodaj lekcję</div>
            <InputField addDayForm name={"Godzina:"} label={"Godzina:"} onChange={(event) => setInputHour(event.target.value)} error={hoursError} value={"inputHour"}></InputField>
            <InputField addDayForm name={"Minuty:"} label={"Minuty:"} onChange={(event) => setInputMinutes(event.target.value)} error={minutesError} value={"inputMinutes"}></InputField>
            <Button text="Dodaj!" btnClass="secondary" onClick={submitAddLesson} />
        </form>
    );
}

export default AddDayForm