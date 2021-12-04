import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../../contexts/UserContext"

import Day from './Day';
import MainContainer from '../common/MainContainer';

import get14days from "../../utils/getDates"
import { getLessons } from "../../services/lessonServices"
import { LoadingContext } from '../../contexts/LoadingContext';
import useScrollUp from '../../hooks/useScroller'
import "./Calendar.css"

function Calendar(props) {
    useScrollUp()

    const { refreshUser } = useContext(UserContext)
    const { setIsLoading } = useContext(LoadingContext)
    const [lessons, setLessons] = useState([])


    async function refreshLessons() {
        const { data } = await getLessons()
        setLessons(data)
    }

    useEffect(() => {
        refreshLessons();
    }, [])


    const dates = get14days;

    useEffect(() => {
        if (lessons.length === 0) setIsLoading(true)
        else setIsLoading(false)
        return () => setIsLoading(false)
    }, [lessons.length, setIsLoading])


    return (
        <MainContainer navBar title="Kalendarz">
            <div id="days-div">
                {dates.map(date => <Day
                    key={date}
                    date={date}
                    classes={lessons}
                    refreshLessons={refreshLessons}
                    refreshUser={refreshUser}
                />)}
            </div>
        </MainContainer>
    );
}

export default Calendar;