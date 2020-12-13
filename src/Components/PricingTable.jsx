import React from 'react';
import './PricingTable.css'

function PricingTable(props) {
    return (
        <div id="tablePricingCont">
            <table className="pricingTable">
                <tbody >
                    <tr>
                        <th colSpan="2">Cennik</th>
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
                </tbody>
            </table>
        </div>
    );
}

export default PricingTable;