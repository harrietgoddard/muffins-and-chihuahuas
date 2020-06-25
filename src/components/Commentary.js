import React from "react";

const Commentary = ({ player1, board, winner }) => {
    
    //if board has no 0s (ie unclicked squares) and there's not a winner
    let draw = !board.filter(item => item === 0).length && !winner;

    return (
            <h2>
                { winner ?
                (winner === 1 ? "Chihuahua" : "Muffin") + " wins!" : null }

                { draw ? "It's a draw!" : null }
                
                { !winner && !draw ?
                (player1 ? "Up next: Chihuahua" : "Up next: Muffin") : null }
            </h2>
    )
}

export default Commentary;