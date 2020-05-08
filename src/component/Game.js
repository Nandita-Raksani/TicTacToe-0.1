import React, { useState } from 'react';
import Tile from './Tile';
import Status from './Status';
import Constants from '../constants/Constants';
import StyleConstants from '../constants/StyleConstants';
import '../App.css';

const Game = () => {
    const [state, setState] = useState({
        boardArray: Array(Constants.NUMBER_OF_TILES).fill(Constants.EMPTY_VALUE),
        isNextSymbolX: true,
        gameOver: false,
        winningPositions: Array(3).fill(Constants.EMPTY_VALUE)
    });

    const renderBoard = () => {
        let tileList = [];
        for (let position = 0; position < Constants.NUMBER_OF_TILES; position++) {
            tileList.push(<li key={position}>
                <Tile onClick={() => handleClick(position)} value={state.boardArray[position]}
                    isGameOver={state.gameOver}
                    isWinning={state.winningPositions && state.winningPositions.includes(position)} />
            </li>);
        }
        return tileList;
    }
    const handleClick = (position) => {
        const boardArray = state.boardArray.slice();
        boardArray[position] = Constants.SYMBOL_X;
        boardArray[position] = state.isNextSymbolX ? Constants.SYMBOL_X : Constants.SYMBOL_O;
        setState((prevState) => ({ ...prevState, boardArray: boardArray, isNextSymbolX: !state.isNextSymbolX }));
    }

    const handlePlayerWon = (winningPosition) => {
        setState((prevState) => ({ ...prevState, gameOver: true, winningPositions: winningPosition }));
    }

    const reset = () => {
        setState({
            boardArray: Array(9).fill(Constants.EMPTY_VALUE),
            xIsNext: true,
            gameOver: false,
            winningPositions: []
        });
    };

    return (
        <div>
            <div className={StyleConstants.STATUS}>
                <Status currentPlayer={state.isNextSymbolX ? Constants.SYMBOL_X : Constants.SYMBOL_O}
                    board={state.boardArray}
                    onPlayerWon={(winningPosition) => handlePlayerWon(winningPosition)} />
            </div>
            <ul className={StyleConstants.BOARD}>
                {renderBoard()}
            </ul>
            <div className={StyleConstants.RESTART}>
                <button className={StyleConstants.RESTART_BUTTON} type="Submit" onClick={() => reset()}>Reset</button>
            </div>
        </div>
    );
}
export default Game;