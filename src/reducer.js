import initialState from "./initial";

//when square is clicked, update the corresponding item in the board array with 1 (player1) or 2 (player2)
const clicked = (state, { index }) => {
    let newBoard = [...state.board];
    newBoard[index] = state.player1 ? 1 : 2;
    return {
        ...state,
        player1: !state.player1,
        board: newBoard,
        counter: state.counter + 1
    }
}

const calculateWinner = state => {

    //represents winning lines on the board
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const { board } = state;

    //loop through the lines to identify whether the board contains any matching lines and which player has won
    for (let i = 0; i < lines.length; i += 1) {

        let [a, b, c] = lines[i];

        if (
            board[a] && board[b] && board[b] 
            &&
            board[a] === board[b] && board[a] === board[c]
            ) {
                return {
                ...state,
                winner: board[a]
            }
        }

    }


    return state;
}

const reducer = (state, action) => {
    switch(action.type) {
        case "CLICKED": return calculateWinner(clicked(state, action));
        case "RESET" : return initialState;
        default: return state;
    }
}

export default reducer;