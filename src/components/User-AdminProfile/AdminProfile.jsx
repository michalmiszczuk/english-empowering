import React, { useContext, useEffect, useState } from 'react';

import AddLesson from './AddLesson';
import AdminReservedView from './AdminReservedView';
import AdminUsersInfo from './AdminUsersInfo';
import DeleteUser from './DeleteUser';
import MainContainer from '../common/MainContainer';

import { getUsers, getUser } from "../../services/userServices"
import { getLessons } from '../../services/lessonServices'
import { LoadingContext } from '../../contexts/LoadingContext.js';
import "./AdminProfile.css"



function AdminProfile(props) {

    const [lessons, setLessons] = useState()
    const [users, setUsers] = useState();
    const [user, setUser] = useState();

    const [showAddPage, setShowAddPage] = useState(false);
    const [showDeletePage, setShowDeletePage] = useState(false);
    const { setIsLoading } = useContext(LoadingContext)

    async function refreshUsers() {
        setIsLoading(true)
        const { data } = await getUsers()
        setUsers(data)
        setUser(data[1])
        setIsLoading(false)
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

    return (
        <MainContainer topBar title="Admin">
            <div className="main-content-admin">
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
        </MainContainer >

    );
}

export default AdminProfile;