import Constants from '../constants/Constants';

const determineWinner = (board) => {
    return isRowCompletedByAPlayer(board) || isColumnCompletedByAPlayer(board) || isDiagonalCompletedByAPlayer(board);
};

const isRowCompletedByAPlayer = (board) => {
    return isFirstRowCompletedByAPlayer(board) || isSecondRowCompletedByAPlayer(board)
        || isThirdRowCompletedByAPlayer(board);
};

const isColumnCompletedByAPlayer = (board) => {
    return isFirstColumnCompletedByAPlayer(board) || isSecondColumnCompletedByAPlayer(board)
        || isThirdColumnCompletedByAPlayer(board);
};

const isDiagonalCompletedByAPlayer = (board) => {
    return isUpperLeftToLowerRightDiagonalCompletedByAPlayer(board)
        || isUpperRightToLowerLeftDiagonalCompletedByAPlayer(board);
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

const isUpperLeftToLowerRightDiagonalCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.UPPER_LEFT_TO_LOWER_RIGHT_DIAGONAL_POSITIONS);
};

const isUpperRightToLowerLeftDiagonalCompletedByAPlayer = (board) => {
    return isPositionsOccupiedBySamePlayer(board, Constants.UPPER_RIGHT_TO_LOWER_LEFT_DIAGONAL_POSITIONS);
};

const isPositionsOccupiedBySamePlayer = (board, positions) => {
    const [a, b, c] = positions;
    if (board && board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { player: board[a], positions: [a, b, c]};
    }
    return null;
}

export default determineWinner;