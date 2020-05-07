import React, { useState } from 'react';
import Tile from './Tile';
import '../App.css';

const Game = () => {
    const [state, setState] = useState({
        boardArray: Array(9).fill('')
    });

    const renderBoard = () => {
        let tileList = [];
        for (let position = 0; position < 9; position++) {
            tileList.push(<li key={position}>
                <Tile onClick={() => handleClick(position)} value={state.boardArray[position]} />
            </li>);
        }
        return tileList;
    }
    const handleClick = (position) => {
        const boardArray = state.boardArray.slice();
        boardArray[position] = 'X';
        setState((prevState) => ({ ...prevState, boardArray: boardArray }));
    }

    return (
        <div>
            <ul className="board">
                {renderBoard()}
            </ul>
        </div>
    );
}
export default Game;