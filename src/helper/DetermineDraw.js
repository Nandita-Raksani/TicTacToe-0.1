import Constants from './../constants/Constants';

const isDraw = (board) => {
    return board.indexOf(Constants.EMPTY_VALUE) === Constants.INDEX_NOT_FOUND;
};
export default isDraw;