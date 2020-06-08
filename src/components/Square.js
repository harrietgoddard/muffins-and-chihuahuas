import React from "react";

const Square = ({ status, winner, counter, handleClick }) => {
    
    let background = status === 1 ? `chihuahua-1.jpeg` :
    status === 2 ? "muffin.jpg" :
    "";

    return (
        <div 
            style={{ 
            border: "1px solid black",
            width: 100,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundImage: `url("/images/${ background }")`,
            backgroundSize: "cover",
            pointerEvents: status || winner ? "none" : "auto"
        }}
            onClick={ handleClick }
        />
    )
}

export default Square;