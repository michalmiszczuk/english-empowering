import React from 'react';
import regulamin from '../static/regulamin.jpg'
import MainContainer from './common/MainContainer';
import './TermsAndPrivacy.css'

function TermsAndConditions(props) {
    return (
        <MainContainer navBar title="Regulamin">
            <div className="terms-and-privacy">
                <div className="terms-and-privacy-picture">
                    <img src={regulamin} alt="" />
                </div>
            </div>
        </MainContainer>
    );
}

export default TermsAndConditions;