import React from 'react';
import './StatsBanner.css';

const StatsBanner = () => {
  return (
    <div className="stats-banner-container">
      <ul>
        <li>
          <p>Bankroll: 1129.23 XMR</p>
        </li>
        <li>
          <p>Median Multiplier: 1.89x</p>
        </li>
        <li>
          <p>Max Winnings: 10.55 XMR</p>
        </li>
      </ul>
    </div>
  );
};

export default StatsBanner;
