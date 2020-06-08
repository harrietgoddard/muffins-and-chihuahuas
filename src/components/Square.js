import React from "react";

const Square = ({ player1, status, handleClick }) => {
    
    let background = status === 1 ? "chihuahua.jpeg" :
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
            backgroundImage: `url("/images/${ background }")`
        }}
            onClick={ handleClick }
        />
    )
}

export default Square;