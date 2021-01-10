import React from 'react';
import CancelLessonInfo from './CancelLessonInfo';
import LessonsTable from './LessonsTable';
import './UserReservedLessons.css'

function ReservedLessonsView({ onDelete }) {
    return (
        <div className="reserved-lessons-container">
            <div className="reserved-header">Zarezerwowane zajęcia</div>
            <LessonsTable onDelete={onDelete} />
            <CancelLessonInfo />
        </div>
    );
}

export default ReservedLessonsView;

