import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../../hooks/UserContext"

import Day from './Day';
import LoadingAnimation from '../common/LoadingAnimation';
import MainContainer from '../common/MainContainer';
import { getLessons } from "../../services/lessonServices"
import get14days from "../../utils/getDates"
import "./Calendar.css"

function Calendar(props) {

    const { refreshUser } = useContext(UserContext)
    const [lessons, setLessons] = useState([])


    async function refreshLessons() {
        const { data } = await getLessons()
        setLessons(data)
    }

    useEffect(() => {
        refreshLessons();
    }, [])

    const dates = get14days;

    return (
        <>
            {!lessons.length && <LoadingAnimation />}
            <MainContainer navBar title="Kalendarz">
                <div id="daysDiv">
                    {dates.map(date => <Day
                        key={date}
                        date={date}
                        classes={lessons}
                        refreshLessons={refreshLessons}
                        refreshUser={refreshUser}
                    />)}
                </div>
            </MainContainer>
        </>
    );
}

export default Calendar;