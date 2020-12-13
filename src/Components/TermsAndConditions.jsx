import React from 'react';
import regulamin from '../static/regulamin.jpg'
import NavBar from './common/NavBar';

function TermsAndConditions(props) {
    return (
        <div className="termsConditionsCont">
            <NavBar name="Regulamin" />
            <img src={regulamin} alt="" />
        </div>
    );
}

export default TermsAndConditions;