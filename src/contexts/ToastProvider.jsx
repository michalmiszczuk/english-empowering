import React, { useEffect, useState } from 'react';
import ToastMsg from '../Components/common/ToastMsg';
import { ToastContext } from './ToastContext';

function ToastProvider({ children }) {
    const [message, setMessage] = useState('')
    const [toastType, setToastType] = useState('') // "error" or "info" or "warning" or "success"

    const toastClass = `${toastType}-message-container`;

    function showToast(type, message) {
        setMessage(message)
        setToastType(type)
    }

    useEffect(() => {
        if (message) {
            const x = setTimeout(() => setMessage(''), 3000);

            return () => {
                clearTimeout(x);
            }
        }
    }, [message]);


    console.log(message)

    const handleCloseToast = () => {
        setMessage('')
        window.clearTimeout()
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {message && <ToastMsg message={message} onCloseToast={handleCloseToast} toastClass={toastClass} />}
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;