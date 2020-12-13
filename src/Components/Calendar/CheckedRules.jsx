import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'
import './CheckedRules.css'

function CheckedRules({ markedError, checkedRules, handleSetCheckRules }) {

    return (
        <div className={!markedError || checkedRules ? "reserve-text" : "reserve-text mark-error"} >
            <FontAwesomeIcon
                icon={checkedRules ? faCheckSquare : faSquare}
                color="#333"
                onClick={handleSetCheckRules}
                style={{ marginRight: 5 }} />
                - zapoznałem się z regulaminem
        </div>
    );
}

export default CheckedRules;