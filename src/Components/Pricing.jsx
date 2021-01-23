import React, { useEffect } from 'react';
import "./Pricing.css"

import london1 from "../static/london4.jpg"
import books from "../static/books.jpg"
import london2 from "../static/london3.jpg"
import MainContainer from './common/MainContainer';
import PricingTable from './PricingTable';
import Aos from "aos"
import 'aos/dist/aos.css'

function Pricing(props) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        < MainContainer navBar title="Cennik" >
            <div id="pricing-main-photo" data-aos="slide-down" data-aos-duration="1000">
                <img src={london1} alt="" className="main-pricing-pic" />
                <img src={books} alt="" className="main-pricing-pic" />
                <img src={london2} alt="" className="main-pricing-pic" />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                <PricingTable />

            </div>
        </MainContainer >
    );
}

export default Pricing;

