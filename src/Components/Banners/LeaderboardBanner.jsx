import React from 'react';
import './LeaderboardBanner.css';

function LeaderboardBanner() {
  return (
    <div className="leaderboard-table">
      <h2>Leaderboard</h2>
      <table className="table-styling">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td>1</td>
            <td>JohnDoe</td>
            <td>1,002.92 XMR</td>
          </tr>
          <tr className="table-row">
            <td>2</td>
            <td>JaneDoe</td>
            <td>998.92 XMR</td>
          </tr>
          <tr className="table-row">
            <td>3</td>
            <td>BobSmith</td>
            <td>829.24 XMR</td>
          </tr>
          <tr className="table-row">
            <td>4</td>
            <td>thelegend27</td>
            <td>822.76 XMR</td>
          </tr>
          <tr className="table-row">
            <td>5</td>
            <td>xqc</td>
            <td>653.83 XMR</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LeaderboardBanner;
