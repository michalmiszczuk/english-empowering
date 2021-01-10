import React from 'react';
import regulamin from '../static/regulamin.jpg'
import MainContainer from './common/MainContainer';
import './TermsAndPrivacy.css'

function TermsAndConditions(props) {
    return (
        <MainContainer navBar title="Regulamin">
            <div className="terms-and-privacy">
                <img src={regulamin} alt="" />
            </div>
        </MainContainer>
    );
}

export default TermsAndConditions;