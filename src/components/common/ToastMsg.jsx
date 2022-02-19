import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ToastMsg.css'

function ToastMsg({ message, onCloseToast, toastClass }) {

    return (
        <div className={toastClass}>
            <FontAwesomeIcon icon={faTimes} onClick={onCloseToast} className="close-icon-toast" />
            {message}
            <div className="error-info-timeout" />
        </div>
    );
}

export default ToastMsg;