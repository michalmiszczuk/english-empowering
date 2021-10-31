import React, { useContext, useEffect, useState } from 'react';

import LoadingAnimation from '../common/LoadingAnimation';
import MainContainer from '../common/MainContainer';
import UserReservedLessons from './UserReservedLessons';
import UserInfo from './UserInfo';
import PersonalInfo from './PersonalUserInfo';

import { cancelLesson } from '../../services/userServices';
import { getLessons } from '../../services/lessonServices';
import { LoadingContext } from '../../contexts/LoadingContext';
import { ToastContext } from '../../contexts/ToastContext';
import { UserContext } from "../../contexts/UserContext"
import "./UserProfile.css"

function UserProfile(props) {

    const { user, refreshUser } = useContext(UserContext)
    const [lessons, setLessons] = useState()
    const { showToast } = useContext(ToastContext)
    const { setIsLoading } = useContext(LoadingContext)


    async function refreshLessons() {
        const { data } = await getLessons()
        setLessons(data)
    }

    useEffect(() => {
        refreshLessons()
    }, [])

    if (!lessons || !user) {
        return <LoadingAnimation />
    }

    const handleCancelLesson = async (item) => {
        try {
            setIsLoading(true)
            await cancelLesson(user, lessons, item)
            refreshUser()
            refreshLessons()
            showToast('success', `Lekcja dnia ${item.days} o godzinie ${item.time} została anulowana.`)
            setIsLoading(false)
        } catch (ex) {
            setIsLoading(false)
            if (ex.response && ex.response.status === 400) showToast('error', ex.response.data)
        }

    };

    return (
        <MainContainer navBar title="Moje konto">
            <div className="main-content-users">
                <PersonalInfo user={user} />
                <UserInfo user={user} noPointer />
                <UserReservedLessons onDelete={handleCancelLesson} />
            </div>
        </MainContainer>
    );
}

export default UserProfile;