import React from 'react';

import MainContainer from './common/MainContainer';

import regulamin from '../static/regulamin.jpg'
import useScrollUp from '../hooks/useScroller';
import './TermsAndPrivacy.css'

function TermsAndConditions(props) {
    useScrollUp()

    return (
        <MainContainer navBar title="Regulamin">
            <div className="terms-and-privacy">
                <div className="terms-and-privacy-picture">
                    <img className="terms-and-privacy-picture" src={regulamin} alt="" />
                </div>
            </div>
        </MainContainer>
    );
}

export default TermsAndConditions;