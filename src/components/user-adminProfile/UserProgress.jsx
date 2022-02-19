import React, { useContext } from 'react';

import ProgressBar from './ProgressBar';

import { LoadingContext } from '../../contexts/LoadingContext';
import { setProgressLevel } from '../../services/userServices';
import { ToastContext } from '../../contexts/ToastContext';

import './UserProgress.css'

function UserProgress({ user, noPointer, refreshUser, admin }) {

    const { showToast } = useContext(ToastContext)
    const { setIsLoading } = useContext(LoadingContext)

    if (!user) return <div>No users in the database.</div>

    const handleSetLevel = async (title, level) => {
        try {
            if (noPointer) return;
            setIsLoading(true)
            await setProgressLevel(user, title, level, noPointer)
            refreshUser()
            setIsLoading(false)
        } catch (ex) {
            setIsLoading(false)
            if (ex.response && ex.response.status === 400) showToast('error', ex.response.data)
        }
    }

    return (
        <div className="progress-container" id={admin ? "progress-admin-container" : null}>
            <div className="progress-header"> Mój postęp: </div >
            <div className="progress-tables">
                {user.progress.map(bar =>
                    <ProgressBar
                        noPointer={noPointer}
                        key={bar.title}
                        title={bar.title}
                        currentLevel={bar.currentLevel}
                        setLevel={(level) => handleSetLevel(bar.title, level)}
                    />)}
            </div>
        </div>
    );
}

export default UserProgress;