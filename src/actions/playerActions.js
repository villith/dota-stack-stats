import * as types from './actionTypes';
import playerApi from '../apiInterfaces/playerApiInterface';
import playerIDs from '../resources/playerIDs';

let steam_getPlayerSummariesSuccess = players => {
  return { type: types.STEAM_GETPLAYERSSUMMARIES_SUCCESS, players };
};

let OD_getPlayerSuccess = player => {
  return { type: types.OD_GETPLAYER_SUCCESS, player };
};

let OD_getPlayer = playerID => {
  return dispatch => {
    return playerApi.OD_getPlayer(playerID).then(player => {
      return dispatch(OD_getPlayerSuccess(player));
    });
  };
};

let steam_getPlayerSummaries = () => {
  return dispatch => {
    return playerApi.steam_getPlayerSummaries(playerIDs).then(res => {
      let players = res.response.players;
      return dispatch(steam_getPlayerSummariesSuccess(players));
    }).catch(error => {
      throw(error);
    });
    // let players = playerIDs.players;
    // let playersKeys = Object.keys(players);
    // for (let i = 0; i < playersKeys.length; i++) {
    //   let playerName = playersKeys[i];
    //   let player = players[playerName];
    //   let playerObj = {};
    //   let playerPromises = playerApi(playerID);
    //   let keys = Object.keys(playerPromises);
    //   for (let k = 0; k < keys.length; k++) {
    //     let key = keys[k];
    //     let promise = playerPromises[key];
    //     promise.then(x => {
    //       playerObj[key] = x;
    //       if (k === keys.length - 1) {
    //         rPlayers.push(playerObj);
    //         if (i === players.length - 1) {
    //           return dispatch(loadPlayersSuccess(rPlayers));
    //         }
    //       }
    //     }).catch(error => {
    //       throw(error);
    //     });
    //   }
    // }
  };
};

module.exports = {
  steam_getPlayerSummaries: steam_getPlayerSummaries,
  OD_getPlayer: OD_getPlayer
};
