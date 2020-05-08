import React, { useState, useEffect } from "react";
import Constants from '../constants/Constants';
import determineWinner from '../helper/DetermineWinner';
import isDraw from '../helper/DetermineDraw';

const Status = (props) => {
  const [state, setState] = useState({
    gameStatus: Constants.NEXT_PLAYER + Constants.SYMBOL_X,
    isGameOver: false
  });

  useEffect(() => {
    const getStatus = () => {
      const { board, currentPlayer, onGameDrawOrWon } = props;
      const winner = determineWinner(board);
      const draw = isDraw(board);

      if (winner && winner.player) {
        setState((prevState) => ({ ...prevState, isGameOver: true, gameStatus: Constants.WINNER + winner.player }));
        onGameDrawOrWon(winner.positions);
      } else if (draw) {
        setState((prevState) => ({ ...prevState, isGameOver: true, gameStatus: Constants.GAME_DRAW }));
        onGameDrawOrWon([]);
      } else {
        setState((prevState) => ({ ...prevState, isGameOver: false, gameStatus: Constants.NEXT_PLAYER + (currentPlayer) }));
      }
    };

    if (!state.isGameOver) {
      getStatus();
    }
  }, [props, state.isGameOver])

  return (
    <label>{state.gameStatus}</label>
  );
}
export default Status;

