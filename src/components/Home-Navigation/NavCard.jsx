import React from 'react';
import "./NavCard.css"

function NavCard({ image, description, backYposition }) {


    return (
        <div className="nav-card" style={{
            backgroundImage: `url(${image})`,
            backgroundPositionY: backYposition,
        }}
        >
            {description}
        </ div>
    );
}

export default NavCard;