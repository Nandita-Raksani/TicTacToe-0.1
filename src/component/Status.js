import React from "react";
import Constants from '../constants/Constants';

const Status = (props) => {
  const getStatus = () => {
    const { currentPlayer } = props;
    return Constants.NEXT_PLAYER + currentPlayer;
  };

  return (
    <label>{getStatus()}</label>
  );
}
export default Status;