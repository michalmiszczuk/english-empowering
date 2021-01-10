import React from 'react';
import './ToastMsg.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function ToastMsg({ message, onCloseToast, toastClass }) {
    console.log(message, toastClass)

    return (
        <div className={toastClass}>
            <FontAwesomeIcon icon={faTimes} onClick={onCloseToast} className="close-icon-toast" />
            {message}
            <div className="error-info-timeout" />
        </div>
    );
}

export default ToastMsg;