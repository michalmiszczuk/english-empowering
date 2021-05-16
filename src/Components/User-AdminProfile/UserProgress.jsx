import React, { useContext } from 'react';
import { LoadingContext } from '../../contexts/LoadingContext';
import { ToastContext } from '../../contexts/ToastContext';
import { setProgressLevel } from '../../services/userServices';
import ProgressBar from './ProgressBar';
import './UserProgress.css'

function UserProgress({ user, noPointer, refreshUser, admin }) {

    const { showToast } = useContext(ToastContext)
    const { setIsLoading } = useContext(LoadingContext)

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