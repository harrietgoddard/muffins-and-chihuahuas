import React from "react";

const Commentary = ({ player1, board, winner }) => {
    return (
        <p>
            { winner ? 
            (winner === 1 ? "Chihuahua" : "Muffin") + " wins!" : player1 ? "Up next: Chihuahua" : "Up next: Muffin" }
            { !board.filter(item => item === 0).length && !winner ? "It's a draw!" : null }
        </p>
    )
}

export default Commentary;