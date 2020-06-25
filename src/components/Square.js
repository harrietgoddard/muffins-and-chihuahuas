import React from "react";

const Square = ({ row, status, winner, counter, handleClick }) => {
    
    //controls the square background image according to which player has clicked on it
    let background = status === 1 ? `chihuahua-${ row }.jpeg` :
    status === 2 ? `muffin-${ row }.jpeg` :
    "";

    return (
        <div className="square"
            style={{ 
            backgroundImage: `url("/images/${ background }")`,
            // disable click event if already clicked or if game won
            pointerEvents: status || winner ? "none" : "auto"
        }}
            onClick={ handleClick }
        />
    )
}

export default Square;