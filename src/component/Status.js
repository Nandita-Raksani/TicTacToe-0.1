import React from "react";
import Constants from '../constants/Constants';
import determineWinner from '../helper/DetermineWinner';

const Status = (props) => {
  const getStatus = () => {
    const { board, currentPlayer } = props;
    const winner = determineWinner(board);
    if (winner && winner.player) {
      return Constants.WINNER + winner.player;
    } else {
      return Constants.NEXT_PLAYER + currentPlayer;
    }
  };

  return (
    <label>{getStatus()}</label>
  );
}
export default Status;

