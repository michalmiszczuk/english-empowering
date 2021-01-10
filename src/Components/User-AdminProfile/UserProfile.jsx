import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../contexts/UserContext"
import { ToastContext } from '../../contexts/ToastContext';

import MainContainer from '../common/MainContainer';
import LoadingAnimation from '../common/LoadingAnimation';
import PersonalInfo from './PersonalUserInfo';
import UserReservedLessons from './UserReservedLessons';
import UserInfo from './UserInfo';

import { getLessons } from '../../services/lessonServices';
import { cancelLesson } from '../../services/userServices';
import "./UserProfile.css"
import { LoadingContext } from '../../contexts/LoadingContext';

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
            if (ex.response && ex.response.status === 400) showToast('error', ex.response.data)
        }

    };

    return (
        <MainContainer navBar title="Mój profil">
            <div className="main-content-users">
                <div className="left-user-profile-desktop">
                    <PersonalInfo user={user} />
                    <UserInfo user={user} noPointer />
                </div>
                <div className="left-user-profile-phone">
                    <PersonalInfo user={user} />
                    <UserReservedLessons onDelete={handleCancelLesson} />
                    <UserInfo user={user} noPointer />
                </div>
                <div className="reserved-lessons-desktop">
                    <UserReservedLessons onDelete={handleCancelLesson} />
                </div>
            </div>
        </MainContainer>
    );
}

export default UserProfile;