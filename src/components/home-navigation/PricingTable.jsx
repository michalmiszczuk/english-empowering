import React from 'react';
import './PricingTable.css'

function PricingTable(props) {
    return (
        <div id="table-pricing-cont">
            <table className="pricing-table">
                <tbody >
                    <tr>
                        <th colSpan="2">Cennik</th>
                    </tr>
                    <tr>
                        <td>Rozwój ogólny</td>
                        <td>80zł/h</td>
                    </tr>
                    <tr>
                        <td>Przygotowanie do egzaminów na poziomie do B2</td>
                        <td>80zł/h</td>
                    </tr>
                    <tr>
                        <td>Job interview</td>
                        <td>90zł/h</td>
                    </tr>
                    <tr>
                        <td>Przygotowanie do egzaminów na poziomie C1 i C2</td>
                        <td>90zł/h</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PricingTable;