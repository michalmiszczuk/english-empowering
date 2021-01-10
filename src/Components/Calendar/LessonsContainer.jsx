import React, { useContext } from 'react';
import DeleteIcon from '../common/DeleteIcon';
import './LessonsContainer.css'
import { UserContext } from "../../contexts/UserContext"
import { deleteLesson } from '../../services/lessonServices';
import { ToastContext } from '../../contexts/ToastContext';



function LessonsContainer({ lessonsToRender, onLessonClick, refreshLessons }) {

    const { user } = useContext(UserContext)
    const isAdmin = user?.isAdmin

    const { setMessage } = useContext(ToastContext)

    const handleDelete = async (item) => {
        try {
            await deleteLesson(item._id)
            refreshLessons()
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                setMessage(ex.response.data)
        }
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