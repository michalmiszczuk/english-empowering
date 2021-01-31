import React from 'react';
import "./Pricing.css"

import london1 from "../static/london4.jpg"
import books from "../static/books.jpg"
import london2 from "../static/london3.jpg"
import PricingTable from './PricingTable';

import 'aos/dist/aos.css'

function Pricing(props) {
    return (
        < >
            <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">Cennik</h1>
            <div id="pricing-main-photo" data-aos="fade-up" data-aos-duration="1000">
                <img src={london1} alt="" className="main-pricing-pic" />
                <img src={books} alt="" className="main-pricing-pic" />
                <img src={london2} alt="" className="main-pricing-pic" />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                <PricingTable />
            </div>
        </ >
    );
}

export default Pricing;

