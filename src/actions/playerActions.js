import * as types from './actionTypes';
import playerApi from '../apiInterfaces/playerApiInterface';

export function loadPlayerSuccess(player) {
  return { type: types.LOAD_PLAYER_SUCCESS, player };
}

export default function loadPlayer(playerID) {
  return dispatch => {
    let player = {};
    let playerPromises = playerApi(playerID);
    let keys = Object.keys(playerPromises);
    let len = keys.length;
    for (let i = 0; i < len; i++) {
      let key = keys[i];
      let promise = playerPromises[key];
      promise.then(x => {
        player[key] = x;
        if (i === len - 1) {
          return dispatch(loadPlayerSuccess(player));
        }
      }).catch(error => {
        throw(error);
      });
    }
  };
}
