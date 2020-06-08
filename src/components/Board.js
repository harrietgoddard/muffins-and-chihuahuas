import React, { useReducer } from "react";
import Square from "./Square";

const initialState = {
    player1: true,
    board: Array(9).fill(null),
    winner: 0
}

const clicked = (state, { index }) => {
    let newBoard = [...state.board];
    newBoard[index] = state.player1 ? 1 : 2;
    return {
        ...state,
        player1: !state.player1,
        board: newBoard
    }
}

const calculateWinner = state => {
    // let lines = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    // ];

    // lines.forEach(line => {
    //     let { board } = state;
    //     let a = line[0];
    //     let b = line[1];
    //     let c = line[2];

        // if ( board[a] && board[b] && board[c] && board[a] === board[b] && board[a] === board[c]) {
        //     console.log("won");
        //     return {
        //         ...state,
        //         winner: state.board[a]
        //     }
        // }
    // })

    // return state;

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
        default: return state;
    }
}

const Board = () => {
    
    const [{ player1, board }, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            width: 300,
            height: 300
        }}>
            <Square 
                player1={ player1 }
                status={ board[0] } 
                handleClick={ () => dispatch({ 
                    type: "CLICKED", 
                    index: 0}) 
                }
            />
            <Square 
                player1={ player1 }
                status={ board[1] } 
                handleClick={ () => dispatch({ 
                    type: "CLICKED", 
                    index: 1
                }) }
            />
            <Square 
                player1={ player1 }
                status={ board[2] } 
                handleClick={ () => dispatch({ 
                    type: "CLICKED", 
                    index: 2
                }) }
            />
            <Square 
                player1={ player1 }
                status={ board[3] } 
                handleClick={ () => dispatch({ 
                    type: "CLICKED", 
                    index: 3
                }) }
            />
            <Square 
                player1={ player1 }
                status={ board[4] } 
                handleClick={ () => dispatch({ 
                    type: "CLICKED", 
                    index: 4
                }) }
            />
            <Square 
                player1={ player1 }
                status={ board[5] } 
                handleClick={ () => dispatch({ 
                    type: "CLICKED", 
                    index: 5
                }) }
            />
            <Square 
                player1={ player1 }
                status={ board[6] } 
                handleClick={ () => dispatch({ 
                    type: "CLICKED", 
                    index: 6}) 
                }
            />
            <Square 
                player1={ player1 }
                status={ board[7] } 
                handleClick={ () => dispatch({ 
                    type: "CLICKED", 
                    index: 7
                }) }
            />
            <Square 
                player1={ player1 }
                status={ board[8] } 
                handleClick={ () => dispatch({ 
                    type: "CLICKED", 
                    index: 8
                }) }
            />
           
        </div>
    )
}

export default Board;