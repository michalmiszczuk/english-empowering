import React from 'react';
import { updateUser } from '../../services/userServices';
import ProgressBar from './ProgressBar';
import './UserProgress.css'

function UserProgress({ user, noPointer, refreshUser }) {

    const handleSetLevel = async (title, level) => {
        if (noPointer) return;
        const newProgress = [...user.progress]
        const currentBar = newProgress.find(bar => bar.title === title)
        if (currentBar.currentLevel === level) level = 0;
        currentBar.currentLevel = level
        await updateUser(user._id, { ...user, progress: newProgress })
        refreshUser()
    }

    return (
        <div className="progress-container">
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