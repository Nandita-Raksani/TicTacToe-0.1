import React, { useState } from 'react';
import Tile from './Tile';
import Constants from '../constants/Constants';
import StyleConstants from '../constants/StyleConstants';
import '../App.css';

const Game = () => {
    const [state, setState] = useState({
        boardArray: Array(Constants.NUMBER_OF_TILES).fill(Constants.EMPTY_VALUE),
        isNextSymbolX: true
    });

    const renderBoard = () => {
        let tileList = [];
        for (let position = 0; position < Constants.NUMBER_OF_TILES; position++) {
            tileList.push(<li key={position}>
                <Tile onClick={() => handleClick(position)} value={state.boardArray[position]} />
            </li>);
        }
        return tileList;
    }
    const handleClick = (position) => {
        const boardArray = state.boardArray.slice();
        boardArray[position] = Constants.SYMBOL_X;
        boardArray[position] = state.isNextSymbolX ? Constants.SYMBOL_X : 'O';
        setState((prevState) => ({ ...prevState, boardArray: boardArray,  isNextSymbolX: !state.isNextSymbolX }));
    }

    return (
        <div>
            <ul className = {StyleConstants.BOARD}>
                {renderBoard()}
            </ul>
        </div>
    );
}
export default Game;