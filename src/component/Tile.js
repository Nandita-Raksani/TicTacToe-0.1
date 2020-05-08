import React from 'react';
import StyleConstants from '../constants/StyleConstants';
import '../App.css';

const Tile = (props) => {
    return (
        <button className={StyleConstants.TILE_BUTTON + (props.isWinning ? StyleConstants.TILE_WINNING : null)} onClick={props.onClick}
            disabled={props.isGameOver || props.value} data-pro={props.value}>
            {props.value}
        </button>
    );
}
export default Tile; 