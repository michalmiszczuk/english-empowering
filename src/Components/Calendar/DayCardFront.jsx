import React from 'react';
import { UserContext } from "../../contexts/UserContext"

import DayCardContainer from './DayCardContainer';
import LessonsContainer from './LessonsContainer';
import './DayCardFront.css'
import { useContext } from 'react';
import Button from '../common/Button';

function DayCardFront({ date, lessonsToRender, onLessonClick, setLessonId, onAddLessonClick, refreshLessons }) {
    const { user } = useContext(UserContext)

    const isAdmin = user?.isAdmin

    return (
        <DayCardContainer date={date} direction="front">
            <LessonsContainer
                lessonsToRender={lessonsToRender}
                setLessonId={setLessonId}
                onLessonClick={onLessonClick}
                refreshLessons={refreshLessons} />
            {isAdmin && <Button
                text="Dodaj"
                onClick={onAddLessonClick}
                btnClass="secondary" />
            }
        </DayCardContainer>
    );
}

export default DayCardFront;