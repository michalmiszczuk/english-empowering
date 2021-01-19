import React, { useEffect, useState } from 'react';

import AddLesson from './AddLesson';
import AdminReservedView from './AdminReservedView';
import AdminUsersInfo from './AdminUsersInfo';
import DeleteUser from './DeleteUser';
import LoadingAnimation from '../common/LoadingAnimation'
import MainContainer from '../common/MainContainer';

import { getUsers, getUser } from "../../services/userServices"
import { getLessons } from '../../services/lessonServices'
import "./AdminProfile.css"



function AdminProfile(props) {

    const [lessons, setLessons] = useState()
    const [users, setUsers] = useState();
    const [user, setUser] = useState();

    const [showAddPage, setShowAddPage] = useState(false);
    const [showDeletePage, setShowDeletePage] = useState(false);

    async function refreshUsers() {
        const { data } = await getUsers()
        setUsers(data)
        setUser(data[1])
    }

    async function refreshUser() {
        if (!user) return
        const { data } = await getUser(user._id)
        setUser(data)
    }

    async function refreshLessons() {
        const { data } = await getLessons()
        setLessons(data)
    }

    useEffect(() => {
        refreshLessons(setLessons)
        refreshUsers()
    }, [])


    if (!lessons || !users || !user) {
        return <LoadingAnimation />
    }

    return (
        <MainContainer navBar title="Admin">
            <div className="main-content-users">
                <AdminUsersInfo
                    user={user}
                    users={users}
                    onChangeUser={(user) => setUser(user)}
                    onShowDeletePage={() => setShowDeletePage(true)}
                    refreshUser={refreshUser}
                />
                <div className="admin-lessons-container">
                    <AdminReservedView
                        users={users}
                        user={user}
                        lessons={lessons}
                        showAddPage={showAddPage}
                        refreshLessons={refreshLessons}
                        refreshUser={refreshUsers}
                        setShowAddPage={setShowAddPage}
                    />
                    {showAddPage && <div id="add-page">
                        <AddLesson
                            iconClick={() => setShowAddPage(false)}
                            setShowAddPage={() => setShowAddPage(false)}
                            user={user}
                            refreshLessons={refreshLessons}
                            refreshUser={refreshUsers}
                        />
                    </div>}
                    {showDeletePage && <div id="delete-page">
                        <DeleteUser
                            onSubmitNo={() => setShowDeletePage(false)}
                            refreshUsers={refreshUsers}
                            user={user}
                            users={users}
                        />
                    </div>}
                </div>
            </div>
        </MainContainer>

    );
}

export default AdminProfile;