import React from 'react';
import StyleConstants from '../constants/StyleConstants';
import '../App.css';

const Tile = (props) => {
    return (
        <button className={StyleConstants.TITLE_BUTTON} onClick={props.onClick}
            disabled={props.value} data-pro={props.value}>
            {props.value}
        </button>
    );
}
export default Tile; 