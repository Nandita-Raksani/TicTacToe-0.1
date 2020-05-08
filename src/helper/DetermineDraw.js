import Constants from './../constants/Constants';

const isDraw = (board) => {
    if (board) {
      for (var i = 0; i < board.length; i++) {
        if (board[i] === Constants.EMPTY_VALUE)
          return false;
      }
      return true;
    }
  };
  export default isDraw;