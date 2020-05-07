import React from "react";
import Constants from '../constants/Constants';

const Status = (props) => {
  const getStatus = () => {
    const { board, currentPlayer } = props;
    const winner = isRowCompletedByAPlayer(board) || isColumnCompletedByAPlayer(board);
    if (winner && winner.player) {
      return Constants.WINNER + winner.player;
    } else {
      return Constants.NEXT_PLAYER + currentPlayer;
    }
  };

  const isRowCompletedByAPlayer = (board) => {
    return isFirstRowCompletedByAPlayer(board) || isSecondRowCompletedByAPlayer(board)
      || isThirdRowCompletedByAPlayer(board);
  };

  const isColumnCompletedByAPlayer = (board) => {
    return isFirstColumnCompletedByAPlayer(board) || isSecondColumnCompletedByAPlayer(board)
      || isThirdColumnCompletedByAPlayer(board);
  };

  const isFirstRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.FIRST_ROW_POSITIONS);
  };

  const isSecondRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.SECOND_ROW_POSITIONS);
  };

  const isThirdRowCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.THIRD_ROW_POSITIONS);
  };
  const isFirstColumnCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.FIRST_COLUMN_POSITIONS);
  };

  const isSecondColumnCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.SECOND_COLUMN_POSITIONS);
  };

  const isThirdColumnCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.THIRD_COLUMN_POSITIONS);
  };

  const isPositionsOccupiedBySamePlayer = (board, positions) => {
    const [a, b, c] = positions;
    if (board && board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a] };
    }
    return null;
  }

  return (
    <label>{getStatus()}</label>
  );
}
export default Status;

