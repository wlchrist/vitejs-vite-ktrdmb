import React from 'react';
import './TopBanner.css';
import PlayButton from './PlayButton';

const TopBanner = () => {
  return (
    <div className="banner-container">
      <h1>MoneroFlip.io</h1>
      <p>
        MoneroFlip.io is a no login required egaming platform where transparency
        is a priority
      </p>
      <PlayButton />
    </div>
  );
};

export default TopBanner;
