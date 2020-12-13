import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "./CancelLessonInfo.css"


function CancelLessonInfo(props) {
    return (
        <div id="cancel-information">
            <div id="icon-information">
                <FontAwesomeIcon
                    icon={faTimes}
                    className="cancel-icon"
                />
            </div>
                - Anuluj zajęcia. Pamiętaj ! Można odwołać rezerwację do 24h przed rozpoczęciem zajęć.
        </div>
    );
}

export default CancelLessonInfo;