import React from 'react';
import MainContainer from './common/MainContainer';
import privacyPolicy from '../static/politykaPrywatnosci.jpg'
import './TermsAndPrivacy.css'
import useScrollUp from '../hooks/useScroller';

function PrivacyPolicy(props) {
    useScrollUp()

    return (
        <MainContainer navBar title="Polityka Prywatności">
            <div className="terms-and-privacy">
                <div className="terms-and-privacy-picture">
                    <img src={privacyPolicy} alt="" />
                </div>
            </div>
        </MainContainer>
    );
}

export default PrivacyPolicy;