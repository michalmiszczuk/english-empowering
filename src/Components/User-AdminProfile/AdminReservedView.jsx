import React, { useContext, useState } from 'react';

import DeleteIcon from '../common/DeleteIcon';
import Button from '../common/Button';

import setRenderedLessons from '../../utils/setRenderedLessons';
import { cancelLesson } from '../../services/userServices';
import './AdminReservedView.css'
import './AdminProfile.css'
import { ToastContext } from '../../contexts/ToastContext';
import { LoadingContext } from '../../contexts/LoadingContext';

function AdminReservedView({ users, user, lessons, showAddPage, refreshUser, refreshLessons, setShowAddPage }) {


    const [showAllLessons, setShowAllLessons] = useState(false);
    const { showToast } = useContext(ToastContext)
    const { setIsLoading } = useContext(LoadingContext)

    if (!users || !user || !lessons) return <div>No users or lessons in the database.</div>

    const lessonsToRender = showAllLessons ? setRenderedLessons(lessons) : setRenderedLessons(user.reservedLessons)



    const handleCancelLesson = async (item) => {
        try {
            setIsLoading(true)
            await cancelLesson(user, lessons, item)
            showToast('success', `Lekcja dnia ${item.days} o godzinie ${item.time} została anulowana.`)
            refreshUser()
            refreshLessons()
            setIsLoading(false)
        }
        catch (ex) {
            setIsLoading(false)
            if (ex.response && ex.response.status === 400) showToast('error', ex.response.data)
        }
    }

    return (
        <div>
            <div className={showAllLessons ? "admin-lessons-header" : "admin-lessons-header  reserved-marked"} onClick={() => setShowAllLessons(false)}>Zajęcia z danym uczeniem</div>
            <div className={!showAllLessons ? "admin-lessons-header margin" : "admin-lessons-header margin reserved-marked"} onClick={() => setShowAllLessons(true)}>Wszystkie zajęcia</div>
            {!showAddPage && <div className="res-lessons-admin">
                {lessonsToRender.map(item =>
                    <div key={item._id} className="each-lesson-container-admin">
                        <div key={item._id} className="each-lesson-admin">{item.days} {item.time}
                            {users.map(user => user.reservedLessons.map(lesson => lesson._id === item._id && showAllLessons ? <div key={lesson._id}>{user.name} {user.surname}</div> : null))}
                        </div>
                        <DeleteIcon onDelete={() => handleCancelLesson(item)} />
                    </div>
                )}
            </div>}
            {!showAllLessons && <div id="add-page-button">
                {!showAddPage && <Button
                    btnClass="admin-add-buttons"
                    text="Dodaj"
                    onClick={() => setShowAddPage(true)}></Button>}
            </div>}
        </div>
    );
}

export default AdminReservedView;