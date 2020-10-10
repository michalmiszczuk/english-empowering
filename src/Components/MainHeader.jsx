import React from 'react';
import flags from '../static/flags.png'

function MainHeader(props) {
    return (
        <div className="navigationMainHeader">
            <div id="headersCont">
                <div id="header1Line" >Learn English effortlessy.</div>
                <div id="header2Line" >Master communication.</div>
                <div id="header3Line"> Empower yourself.</div>
            </div>
            <div id="flagCont">
                <img src={flags} style={{ opacity: 0.3 }} width={100} height={50} alt="" />
            </div>
        </div>
    );
}

export default MainHeader;