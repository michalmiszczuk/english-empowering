import React, { useContext } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Day from './Day';
import "./CSS/Calendar.css"
import get14days from "../utils/getDates"
import { useState } from 'react';
import AddDayForm from './common/AddDayForm';
import { UserContext } from "../hooks/UserContext"
import { LessonContext } from "../hooks/LessonsContext"



function Calendar({ admin }) {

    const { setUser } = useContext(UserContext)
    const { lessons, setLessons } = useContext(LessonContext)


    const [dayProp, setDayProp] = useState({})
    const [showAddDay, setShowAddDay] = useState(false)
    const [inputHour, setInputHour] = useState("")


    const submitAddLesson = (e) => {
        e.preventDefault();
        setShowAddDay(false);
        setLessons([...lessons, { days: dayProp.dayMonth, time: inputHour, isReserved: false, isDisabled: false, _id: Math.floor(Math.random() * 1000).toString() }])
    }

    const onDelete = (item) => {
        const orginalClasses = lessons
        const filteredClasses = orginalClasses.filter(c => c._id !== item._id)
        setLessons(filteredClasses)
    }


    const handleReserve = item => {
        setUser(prevUser => {
            const newReserved = [...prevUser.reservedLessons];
            newReserved.push({ _id: item._id });
            return { ...prevUser, reservedLessons: newReserved };
        });
        const lessonsToChange = lessons.filter(l => l._id !== item._id)
        const lessonToRemove = { ...item, isReserved: true }
        lessonsToChange.push(lessonToRemove)
        setLessons(lessonsToChange)
    };

    const handleDayProp = (dayName, dayMonth) => {
        setShowAddDay(true);
        setDayProp({ dayName, dayMonth });

    }

    const dates = get14days;
    // const dayMonth = dates.toLocaleDateString("default", { month: "long", day: "numeric" });
    // const dayName = dates.toLocaleDateString("default", { weekday: "long" });

    return (
        <div>
            <div className="mainCalendarDiv" style={{
                filter: showAddDay ? "blur(3px)" : "none",
            }}>
                <NavBar name="Kalendarz" />
                <div id="daysDiv">
                    {dates.map(date => <Day
                        key={date}
                        isAdmin={admin}
                        date={date}
                        classes={lessons}
                        onClick={handleDayProp}
                        onDelete={onDelete}
                        onReserve={handleReserve}
                    />)}
                </div>
                <Footer />
            </div>
            <div style={{
                position: "absolute",
                left: "35vw",
                top: "35vh",
            }}>
                {showAddDay && <AddDayForm iconClick={() => setShowAddDay(false)} onSubmit={submitAddLesson} dayName={dayProp} onChange={(event) => setInputHour(event.target.value)} />}
            </div>
        </div>
    );
}

export default Calendar;