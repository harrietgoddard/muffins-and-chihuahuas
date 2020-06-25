import React from "react";

const Square = ({ row, status, winner, counter, handleClick }) => {
    
    //controls the square background image according to which player has clicked on it
    let background = status === 1 ? `chihuahua-${ row }.jpeg` :
    status === 2 ? `muffin-${ row }.jpeg` :
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