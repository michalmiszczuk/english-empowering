import React from 'react';
import "./Pricing.css"

import InfoCard from '../common/InfoCard';
import london1 from "../../static/london4.jpg"
import books from "../../static/books.jpg"
import london2 from "../../static/london3.jpg"

import 'aos/dist/aos.css'

function Pricing({ pricing }) {
    return (
        <section ref={pricing}>
            <h1 data-aos="fade-up">Cennik</h1>
            <div id="pricing-main-photo" data-aos="fade-up" data-aos-duration="1000">
                <img src={london1} alt="" className="main-pricing-pic" />
                <img src={books} alt="" className="main-pricing-pic" />
                <img src={london2} alt="" className="main-pricing-pic" />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                <div className="pricing-cards-container">
                    <InfoCard containerClass="pricing-card" header="Rozwój ogólny" mainText="90zł" headerClass="pricing-header" mainTextClass="pricing-text" pricing />
                    <InfoCard containerClass="pricing-card" header="Przygotowanie do egzaminów na poziomie do B2" mainText="90zł" headerClass="pricing-header" pricing mainTextClass="pricing-text" />
                    <InfoCard containerClass="pricing-card" header="Przygotowanie do Job Interview" mainText="100zł" headerClass="pricing-header" mainTextClass="pricing-text" pricing />
                    <InfoCard containerClass="pricing-card" header="Przygotowanie do egzaminów na poziomie C1 i C2" mainText="100zł" headerClass="pricing-header" pricing mainTextClass="pricing-text" />
                </div>
            </div>
        </ section>
    );
}

export default Pricing;

