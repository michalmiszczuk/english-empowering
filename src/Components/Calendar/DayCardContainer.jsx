import React from 'react';
import './DayCardContainer.css'
import { toMonthDayString, toWeekDayString } from '../../utils/toDateString.js';

function DayCardContainer({ date, children, direction }) {

    const dateObject = new Date(date)
    const dayName = toWeekDayString(dateObject)
    const dayMonth = toMonthDayString(dateObject)


    let checkWeekend = (dayName === "sobota") ? `day-card-${direction} sobota` : (dayName === "niedziela") ?
        `day-card-${direction} niedziela` : `day-card-${direction}`;

    return (
        < div className={checkWeekend}>
            <div className="day-date">{dayMonth}</div>
            <div className="day-name">{dayName}</div>
            { children}
        </div >
    );
}

export default DayCardContainer;