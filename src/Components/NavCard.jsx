import React from 'react';
import "./CSS/NavigationSite.css"

function NavCard({ image, description, bpY }) {


    return (
        <div className="navCard" style={{
            backgroundImage: `url(${image})`,
            backgroundPositionY: bpY,
        }}

        >
            {description}
        </ div>
    );
}

export default NavCard;