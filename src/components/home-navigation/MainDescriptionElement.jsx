import React from 'react';
import 'aos/dist/aos.css'
import './NavigationSite.css'
import './MainDescriptionElement.css'

function MainDescriptionElement({ descriptionText, flowDirection, picture, text }) {


    return (
        <div data-aos="fade-up" className={flowDirection}>
            <div className={descriptionText}>{text}</div>
            <div className="picture-container">
                <div className="book-me-pic" style={{ backgroundImage: `url("${picture}")` }} />
            </div>
        </div>
    );
}

export default MainDescriptionElement;