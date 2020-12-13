import React from 'react';
import "./DeleteUserButton.css"

function DeleteUserButton({ onClick }) {
    return (
        <div id="delete-button-container">
            <div className="user-selector" id="delete-button" onClick={onClick}>DELETE USER</div>
        </div>
    );
}

export default DeleteUserButton;