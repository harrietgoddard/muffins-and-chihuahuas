import React from "react";

const Commentary = ({ winner, player1 }) => {
    return (
        <p>
            { winner ? 
            (winner === 1 ? "Chihuahua" : "Muffin") + " wins!" : player1 ? "Up next: Chihuahua" : "Up next: Muffin" }
        </p>
    )
}

export default Commentary;