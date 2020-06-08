import React, { useReducer } from "react";
import Square from "./Square";
import Commentary from "./Commentary";

const initialState = {
    player1: true,
    board: Array(9).fill(0),
    counter: 0,
    winner: 0
}

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

const Board = () => {
    
    const [{ player1, board, winner, counter }, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                width: 300,
                height: 300
            }}>
                <Square 
                    id={ 0 }
                    status={ board[0] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 0}) 
                    }
                />
                <Square 
                    status={ board[1] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 1
                    }) }
                />
                <Square 
                    status={ board[2] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 2
                    }) }
                />
                <Square 
                    status={ board[3] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 3
                    }) }
                />
                <Square 
                    status={ board[4] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 4
                    }) }
                />
                <Square 
                    status={ board[5] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 5
                    }) }
                />
                <Square 
                    status={ board[6] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 6}) 
                    }
                />
                <Square 
                    status={ board[7] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 7
                    }) }
                />
                <Square 
                    status={ board[8] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 8
                    }) }
                />
            
            </div>

            <Commentary 
                player1={ player1 }
                winner={ winner }
            />

            <button
                onClick={ () => dispatch({ type: "RESET" }) }
            >New game</button>

        </>    
    )
}

export default Board;