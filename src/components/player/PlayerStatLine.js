import React, { PropTypes } from 'react';

let PlayerStatLine = ({ stats }) => {
  let winStyle = {
    color: 'green'
  };
  let lossStyle = {
    color: 'red'
  };
  return (
    <div>
      <div className="stat-block col-md-2">
        <p className="stat-key">Wins</p>
        <br/>
        <p className="stat-value" style={winStyle}>{stats.wins}</p>
      </div>
      <div className="stat-block col-md-3">
        <p className="stat-key">Losses</p>
        <br/>
        <p className="stat-value" style={lossStyle}>{stats.losses}</p>
      </div>
    </div>
  );
};

PlayerStatLine.propTypes = {
  stats: PropTypes.object.isRequired
};

export default PlayerStatLine;
