import React, { PropTypes } from 'react';
import PlayerStatLine from './PlayerStatLine';

let PlayerStats = ({ player }) => {
  return (
    <div className="player-stats row">
      <div className="profile-container col-md-12">
        <div className="avatar-container col-md-3">
          <img src={player.avatar}/>
        </div>
        <div className="col-md-9 playerinfo-container">
          <div className="playername-container row">
            <p>{player.name}</p>
          </div>
          <div className="playerstatline-container row">
            <PlayerStatLine stats={player.statLine}/>
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
