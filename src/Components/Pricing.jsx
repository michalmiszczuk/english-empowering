import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import "./CSS/Pricing.css"

import london1 from "../static/london4.jpg"
import books from "../static/books.jpg"
import london2 from "../static/london3.jpg"

function Pricing(props) {
    return (
        <div id="mainPricingCont">
            <NavBar name="Cennik" />
            <div id="pricingMainPhoto">
                <img src={london1} alt="" className="mainPricingPic" />
                <img src={books} alt="" className="mainPricingPic" />
                <img src={london2} alt="" className="mainPricingPic" />
            </div>
            <div id="tablePricingCont">
                <table className="pricingTable">
                    <tr>
                        <th colspan="2">Cennik</th>
                    </tr>
                    <tr>
                        <td>Rozwój ogólny</td>
                        <td>70zł/h</td>
                    </tr>
                    <tr>
                        <td>Przygotowanie do egzaminów na poziomie do B2</td>
                        <td>70zł/h</td>
                    </tr>
                    <tr>
                        <td>Job interview</td>
                        <td>80zł/h</td>
                    </tr>
                    <tr>
                        <td>Przygotowanie do egzaminów na poziomie C1 i C2</td>
                        <td>80zł/h</td>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default Pricing;

