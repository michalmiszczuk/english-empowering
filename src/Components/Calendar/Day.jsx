import React, { useState, useContext } from 'react';

import DayCardFront from './DayCardFront.jsx';
import DayCardBack from './DayCardBack.jsx';

import { UserContext } from "../../contexts/UserContext"

import setCalenderLessons from '../../utils/setCalendarLessons.js';
import sortTime from '../../utils/sortTime.js';
import "./Day.css"
import { reserveLesson } from '../../services/userServices.js';
import { ToastContext } from '../../contexts/ToastContext.js';
import { toMonthDayString, } from '../../utils/toDateString.js';
import { LoadingContext } from '../../contexts/LoadingContext.js';

function Day({ classes, date, refreshLessons }) {

    const [lessonTime, setLessonTime] = useState('')
    const [lessonId, setLessonId] = useState('')
    const [rotated, setRotated] = useState(false)
    const [showAddDay, setShowAddDay] = useState(false)

    const { user, refreshUser } = useContext(UserContext)
    const [currentDay, setCurrentDay] = useState()

    const { showToast } = useContext(ToastContext)
    const { setIsLoading } = useContext(LoadingContext)

    const lessonsToRender = setCalenderLessons(classes, date)
    sortTime(lessonsToRender)

    const handleReserve = async () => {
        setIsLoading(true)
        await reserveLesson(classes, lessonId, user)
        setRotated(false)
        const date = toMonthDayString(currentDay)
        showToast('success', `Zarezerwowałeś lekcję na ${lessonTime} dnia ${date}.`)
        refreshLessons()
        refreshUser()
        setIsLoading(false)
    };

    const handleShowAddDay = () => {
        setTimeout(() => {
            setShowAddDay(false)
        }, 300);
        setRotated(false)
    }

    const onAddLessonSubmit = (e) => {
        setTimeout(() => {
            setShowAddDay(false)
        }, 300);
        setRotated(false)
        refreshLessons()
    }

    const onAddLessonClick = () => {
        setShowAddDay(true)
        setRotated(true)
        setCurrentDay(date)
    }

    const onLessonClick = (time, id) => {
        setLessonTime(time);
        setLessonId(id);
        setRotated(true)
        setCurrentDay(date)
    }


    return (
        <div className='day-card'>
            <div className={rotated ? 'day-card-inner rotated' : 'day-card-inner'}>
                <DayCardFront
                    date={date}
                    lessonsToRender={lessonsToRender}
                    onAddLessonClick={onAddLessonClick}
                    onLessonClick={onLessonClick}
                    refreshLessons={refreshLessons}
                />
                <DayCardBack
                    currentDay={currentDay}
                    handleShowAddDay={handleShowAddDay}
                    lessonTime={lessonTime}
                    onReserve={handleReserve}
                    setRotated={() => setRotated(false)}
                    showAddDay={showAddDay}
                    user={user}
                    onAddLessonSubmit={onAddLessonSubmit}
                />
            </div>
        </div>
    );
}

export default Day;