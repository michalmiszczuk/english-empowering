import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../hooks/UserContext"

import MainContainer from '../common/MainContainer';
import LoadingAnimation from '../common/LoadingAnimation';
import UserReservedLessons from './UserReservedLessons';
import UserInfo from './UserInfo';

import { getLessons } from '../../services/lessonServices';
import { cancelLesson, getUser } from '../../services/userServices';
import "./UserProfile.css"
import PersonalInfo from './PersonalUserInfo';

function UserProfile(props) {

    const { user, refreshUser } = useContext(UserContext)
    const [lessons, setLessons] = useState()

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
        await cancelLesson(user, lessons, item)
        refreshUser()
        refreshLessons()
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
                    <UserReservedLessons handleCancelLesson={handleCancelLesson} />
                    <UserInfo user={user} noPointer />
                </div>
                <div className="reserved-lessons-desktop">
                    <UserReservedLessons handleCancelLesson={handleCancelLesson} />
                </div>
            </div>
        </MainContainer>
    );
}

export default UserProfile;