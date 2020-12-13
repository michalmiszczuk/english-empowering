import React, { useContext } from 'react';
import DeleteIcon from '../common/DeleteIcon';
import './LessonsContainer.css'
import { UserContext } from "../../hooks/UserContext"
import { deleteLesson } from '../../services/lessonServices';



function LessonsContainer({ lessonsToRender, onLessonClick, refreshLessons }) {

    const { user } = useContext(UserContext)
    const isAdmin = user?.isAdmin

    const handleDelete = async (item) => {
        await deleteLesson(item._id)
        refreshLessons()
    }

    return (
        <div className="lessons-container">
            {lessonsToRender.map(item => (
                <div key={item._id || item.date} className="one-lesson-div">
                    <div
                        onClick={() => (onLessonClick(item.time, item._id))}
                        className="hour-button"
                        style={{ width: isAdmin ? "65%" : "80%", }}
                        key={item._id}>
                        {item.time}
                    </div>
                    {isAdmin && <DeleteIcon onDelete={() => handleDelete(item)} item={item} />}
                </div>))}
        </div >
    );
}

export default LessonsContainer;