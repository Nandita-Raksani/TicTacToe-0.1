import React from 'react';
import Game from './component/Game';
import Constants from './constants/Constants';
import StyleConstants from './constants/StyleConstants';
import './App.css';

function App() {
  return (
    <div className= {StyleConstants.APP}>
      <header className={StyleConstants.APP_HEADER}>
        {Constants.APP_TITLE}
      </header>
      <Game/>
    </div>
  );
}

export default App;