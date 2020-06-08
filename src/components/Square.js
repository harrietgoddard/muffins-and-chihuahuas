import React from "react";

const Square = ({ player1, status, handleClick }) => {
    return (
        <div 
            style={{ 
            border: "1px solid black",
            width: 100,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
        }}
            onClick={ handleClick }
        >
            <p>
                { status }
            </p>
        </div>
    )
}

export default Square;