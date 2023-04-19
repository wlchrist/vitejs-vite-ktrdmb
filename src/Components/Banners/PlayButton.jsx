import React from 'react';
import './PlayButton.css';

const PlayButton = ({ onClick }) => {
  return (
    <center>
      <button className="play-button" onClick={onClick}>
        Play Crash
      </button>
    </center>
  );
};

export default PlayButton;
