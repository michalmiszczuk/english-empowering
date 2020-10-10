import React from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import "./CSS/Day.css"
import { useState } from 'react';

function Day({ date, onClick, classes, onDelete, isAdmin, onReserve }) {

    const [toReserve, setToReserve] = useState(false)
    const dayMonth = date.toLocaleDateString("default", { month: "long", day: "numeric" });
    const dayName = date.toLocaleDateString("default", { weekday: "long" });
    console.log(date)


    const checkLessonsToRender = () => {
        let lessons = classes.map(item => item)
        let array = []
        for (let lesson of lessons) {
            if (lesson.days === dayMonth && !lesson.isReserved) array.push(lesson);
        }
        if (array.length > 0) return array
        else return []
    }

    const lessonsToRender = checkLessonsToRender()

    lessonsToRender.sort((a, b) => {
        if (a.days === b.days)
            return parseInt(a.time) > parseInt(b.time) ? +1 : parseInt(a.time) < parseInt(b.time) ? -1 : 0;
        return a.days > b.days ? +1 : -1;
    });

    return (
        <>
            <div className={toReserve ? "mainDayDivTurned" : "mainDayDiv"}
                style={{
                    backgroundColor: (dayName === "niedziela")
                        ? "indianRed" : (dayName === "sobota")
                            ? "lightblue" : "cornsilk"
                }}
            >
                <div className="dayDate">{dayMonth}</div>
                <div className="dayName">{dayName}</div>
                <div className="lessonsContainer">
                    {lessonsToRender.map(item => (
                        <div key={item._id} className="oneLessonDiv">
                            <div onClick={() => setToReserve(true)} className="hourButton" style={{ width: isAdmin ? "65%" : "80%", }} key={item._id}>
                                {item.time}
                            </div>
                            {isAdmin && <div className="deleteIcon">
                                <FontAwesomeIcon
                                    key={item._id}
                                    icon={faTimes}
                                    style={styles.closeIcon}
                                    onClick={() => onDelete(item)} />
                            </div>}
                        </div>))}
                </div >
                {
                    isAdmin && <Button
                        width={70}
                        height={30}
                        backgroundColor="coral"
                        text="Add"
                        fontSize={15}
                        onClick={() => onClick(dayName, dayMonth)}
                        borderradius={50}
                        border="none" />
                }
            </div >
            {/* {toReserve && <div className="mainDayDivTurned"
                style={{
                    backgroundColor: (dayName === "niedziela")
                        ? "indianRed" : (dayName === "sobota")
                            ? "lightblue" : "cornsilk"
                }}
            >
                <div className="dayDate">{dayMonth}</div>
                <div className="dayName">{dayName}</div>
                <div className="lessonsContainer">
                    {lessonsToRender.map(item => (
                        <div key={item._id} className="oneLessonDiv">
                            <div onClick={() => setToReserve(true)} className="hourButton" style={{ width: isAdmin ? "65%" : "80%", }} key={item._id}>
                                {item.time}
                            </div>
                            {isAdmin && <div className="deleteIcon">
                                <FontAwesomeIcon
                                    key={item._id}
                                    icon={faTimes}
                                    style={styles.closeIcon}
                                    onClick={() => onDelete(item)} />
                            </div>}
                        </div>))}
                </div >
                {
                    isAdmin && <Button
                        width={70}
                        height={30}
                        backgroundColor="coral"
                        text="Add"
                        fontSize={15}
                        onClick={() => onClick(dayName, dayMonth)}
                        borderradius={50}
                        border="none" />
                }
            </div >} */}
        </>
    );
}

export default Day;

const styles = {
    closeIcon: {
        width: 15,
        height: 15,
        color: "white",
        cursor: "pointer"
    }
}