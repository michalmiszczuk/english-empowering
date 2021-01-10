import React from 'react';
import MainContainer from './common/MainContainer';
import privacyPolicy from '../static/politykaPrywatnosci.jpg'
import './TermsAndPrivacy.css'

function PrivacyPolicy(props) {
    return (
        <MainContainer navBar title="Polityka Prywatności">
            <div className="terms-and-privacy">
                <img src={privacyPolicy} alt="" />
            </div>
        </MainContainer>
    );
}

export default PrivacyPolicy;