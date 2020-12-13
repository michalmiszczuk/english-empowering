import React from 'react';
import "./Pricing.css"

import london1 from "../static/london4.jpg"
import books from "../static/books.jpg"
import london2 from "../static/london3.jpg"
import MainContainer from './common/MainContainer';
import PricingTable from './PricingTable';

function Pricing(props) {

    return (
        < MainContainer navBar title="Cennik" >
            <div id="pricing-main-photo">
                <img src={london1} alt="" className="main-pricing-pic" />
                <img src={books} alt="" className="main-pricing-pic" />
                <img src={london2} alt="" className="main-pricing-pic" />
            </div>
            <PricingTable />
        </MainContainer >
    );
}

export default Pricing;

