import React from "react";
import Constants from '../constants/Constants';

const Status = (props) => {
  const getStatus = () => {
    const { board, currentPlayer } = props;
    const winner = isFirstRowCompletedByAPlayer(board) || isSecondRowCompletedByAPlayer(board);
    if (winner && winner.player) {
      return Constants.WINNER + winner.player;
    } else {
      return Constants.NEXT_PLAYER + currentPlayer;
    }
  };

  const isFirstRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.FIRST_ROW_POSITIONS);
  };

  const isSecondRowCompletedByAPlayer = (board) => {
     return isPositionsOccupiedBySamePlayer(board, Constants.SECOND_ROW_POSITIONS);
  };

  const isPositionsOccupiedBySamePlayer = (board, positions) =>{
    const [a, b, c] = positions;
    if (board && board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a]};
    }
    return null;
  }

  return (
    <label>{getStatus()}</label>
  );
}
export default Status;