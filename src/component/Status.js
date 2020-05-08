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
      if (winner && winner.player) {
        setState((prevState) => ({ ...prevState, isGameOver: true, gameStatus: Constants.WINNER + winner.player }));
        onPlayerWon(winner.positions);
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

