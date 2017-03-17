import React, { PropTypes } from 'react';
import PlayerStatLine from './PlayerStatLine';

let PlayerStats = ({ player }) => {
  let winStyle = {
    color: 'green'
  };
  let lossStyle = {
    color: 'red'
  };
  return (
    <div className="player-stats row">
      <div className="profile-container col-md-12">
        <div className="avatar-container col-md-3">
          <img src={player.avatar}/>
        </div>
        <div className="col-md-9 playerinfo-container">
          <div className="playername-container row">
            <p>{player.name} - last 20 matches</p>
          </div>
          <div className="playerstatline-container row">
            <div className="stat-block col-md-2">
              <p className="stat-key">Wins</p>
              <br/>
              <p className="stat-value" style={winStyle}>{player.winCount}</p>
            </div>
            <div className="stat-block col-md-3">
              <p className="stat-key">Losses</p>
              <br/>
              <p className="stat-value" style={lossStyle}>{player.lossCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlayerStats.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerStats;
