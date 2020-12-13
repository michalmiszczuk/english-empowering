import React, { useContext } from 'react';
import { UserContext } from "../../hooks/UserContext"
import DeleteIcon from '../common/DeleteIcon';
import setRenderedLessons from '../../utils/setRenderedLessons';
import "./LessonsTable.css"


function LessonsTable({ handleCancelLesson }) {

    const { user } = useContext(UserContext)

    const renderedLessons = setRenderedLessons(user.reservedLessons)

    return (
        <div className="res-lessons">
            {renderedLessons.map(item =>
                <div key={item._id} className="each-lesson-container">
                    <div className="each-lesson">{item.days} {item.time}</div>
                    <DeleteIcon disabled={item.isDisabled} onDelete={item.isDisabled ? null : () => handleCancelLesson(item)} />
                </div>
            )}
        </div>
    );
}

export default LessonsTable;

