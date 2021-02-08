import React from 'react';
import useScrollUp from '../hooks/useScroller';
import regulamin from '../static/regulamin.jpg'
import MainContainer from './common/MainContainer';
import './TermsAndPrivacy.css'

function TermsAndConditions(props) {
    useScrollUp()

    return (
        <MainContainer navBar title="Regulamin">
            <div className="terms-and-privacy">
                <img className="terms-and-privacy-picture" src={regulamin} alt="" />
            </div>
        </MainContainer>
    );
}

export default TermsAndConditions;