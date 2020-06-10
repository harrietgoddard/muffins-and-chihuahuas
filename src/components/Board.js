import React, { useReducer } from "react";
import reducer from "../reducer";
import initialState from "../initial";
import Square from "./Square";
import Commentary from "./Commentary";

const Board = () => {
    
    const [{ player1, board, winner, counter }, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="container">

            <div className="board">
                <Square 
                    row={ 1 }
                    status={ board[0] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 0}) 
                    }
                />
                <Square 
                    row={ 1 }
                    status={ board[1] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 1
                    }) }
                />
                <Square 
                    row={ 1 }
                    status={ board[2] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 2
                    }) }
                />
                <Square 
                    row={ 2 }
                    status={ board[3] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 3
                    }) }
                />
                <Square 
                    row={ 2 }
                    status={ board[4] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 4
                    }) }
                />
                <Square 
                    row={ 2 }
                    status={ board[5] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 5
                    }) }
                />
                <Square 
                    row={ 3 }
                    status={ board[6] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 6}) 
                    }
                />
                <Square 
                    row={ 3 }
                    status={ board[7] } 
                    winner={ winner }
                    counter={ counter }
                    handleClick={ () => dispatch({ 
                        type: "CLICKED", 
                        index: 7
                    }) }
                />
                <Square 
                    row={ 3 }
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
                board={ board }
            />

            <button
                onClick={ () => dispatch({ type: "RESET" }) }
            >New game</button>

        </div>    
    )
}

export default Board;