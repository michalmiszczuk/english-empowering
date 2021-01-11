import React, { useContext } from 'react';
import DeleteIcon from '../common/DeleteIcon';
import { UserContext } from "../../contexts/UserContext"
import { deleteLesson } from '../../services/lessonServices';
import { ToastContext } from '../../contexts/ToastContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import './LessonsContainer.css'



function LessonsContainer({ lessonsToRender, onLessonClick, refreshLessons }) {

    const { user } = useContext(UserContext)
    const isAdmin = user?.isAdmin

    const { showToast } = useContext(ToastContext)
    const { setIsLoading } = useContext(LoadingContext)

    const handleDelete = async (item) => {
        try {
            setIsLoading(true)
            await deleteLesson(item._id)
            refreshLessons()
            setIsLoading(false)
        } catch (ex) {
            setIsLoading(false)
            if (ex.response && ex.response.status === 404)
                showToast('error', ex.response.data)
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