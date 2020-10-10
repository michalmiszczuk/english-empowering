import React, { useState } from 'react';
import "./CSS/Button.css"

function Button({
    border = "2px solid oldlace",
    borderradius = "70px 10px 70px 10px",
    width: w,
    height: h,
    backgroundColor: color,
    text,
    textColor = "white",
    fontSize = 20,
    marginRight: right,
    marginTop: top,
    onClick, }) {

    const [isHighlighted, setIsHighlighted] = useState(false)

    return (
        <button className="mainButton" style={{
            width: w,
            height: h,
            backgroundColor: color,
            color: textColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: border,
            fontWeight: 500,
            marginRight: right,
            marginTop: top,
            opacity: isHighlighted ? 1 : 0.7,
            fontFamily: "Roboto",
            fontSize: fontSize,
            fontStyle: "italic",
            outline: "none",
            cursor: "pointer"
        }} onMouseEnter={() => setIsHighlighted(true)}
            onMouseLeave={() => setIsHighlighted(false)}
            onClick={onClick}
        >
            {text}
        </button>
    );
}


export default Button;