import React from 'react';
import Button from '../common/Button';
import './YesNoButtons.css'

function YesNoButtons({ checkedRules, onReserve, setRotatedFalse }) {
    return (
        <div className="yes-no-buttons ">
            <Button enable validError={!checkedRules} onClick={onReserve} btnClass="yes-button" text="TAK" />
            <Button onClick={setRotatedFalse} btnClass="no-button" text="NIE" />
        </div>
    );
}

export default YesNoButtons;