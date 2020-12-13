import React from 'react';
import '../Home-Navigation/NavigationSite.css'

function ShiftingDiv({ children, showMenu }) {
    return (
        <div className={showMenu ? "shifted-main" : "not-shifted-main"}>
            {children}
        </div>
    );
}

export default ShiftingDiv;