import React from 'react';
import '../App.css';

const Tile = (props) => {
    return (
        <button className={"tile-button"} onClick={props.onClick}>
            {props.value}
        </button>
    );
}
export default Tile;