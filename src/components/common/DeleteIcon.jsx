import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './DeleteIcon.css'

function DeleteIcon({ onDelete, disabled }) {
    return (
        <div className={disabled ? "delete-icon-container disabled-delete" : "delete-icon-container"} onClick={onDelete} >
            <FontAwesomeIcon className="delete-icon" icon={faTimes} />
        </div>
    );
}

export default DeleteIcon;