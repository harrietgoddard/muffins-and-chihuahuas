//board state represents the the 3 x 3 board and keeps track of which player has clicked on which square

const initialState = {
    player1: true,
    board: Array(9).fill(0),
    counter: 0,
    winner: 0
}

export default initialState;