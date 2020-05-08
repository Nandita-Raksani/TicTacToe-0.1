import React, { useState, useEffect } from "react";
import Constants from '../constants/Constants';
import determineWinner from '../helper/DetermineWinner';

const Status = (props) => {
  const [state, setState] = useState({
    gameStatus: Constants.NEXT_PLAYER + Constants.SYMBOL_X,
    isGameOver: false
  });

  useEffect(() => {
    const getStatus = () => {
      const { board, currentPlayer, onPlayerWon } = props;
      const winner = determineWinner(board);
      const draw = isDraw(board);

      if (winner && winner.player) {
        setState((prevState) => ({ ...prevState, isGameOver: true, gameStatus: Constants.WINNER + winner.player }));
        onPlayerWon(winner.positions);
      } else if (draw) {
        setState((prevState) => ({ ...prevState, isGameOver: true, gameStatus: Constants.GAME_DRAW }));
        onPlayerWon([]);
      } else {
        setState((prevState) => ({ ...prevState, isGameOver: false, gameStatus: Constants.NEXT_PLAYER + (currentPlayer) }));
      }
    };

    if (!state.isGameOver) {
      getStatus();
    }
  }, [props, state.isGameOver])

  const isDraw = (board) => {
    if (board) {
      for (var i = 0; i < board.length; i++) {
        if (board[i] === Constants.EMPTY_VALUE)
          return false;
      }
      return true;
    }
  };

  return (
    <label>{state.gameStatus}</label>
  );
}
export default Status;

