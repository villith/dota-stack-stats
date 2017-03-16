/* eslint-disable no-case-declarations */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function playerReducer(state = initialState.players, action) {
  switch (action.type) {
    case types.STEAM_GETPLAYERSSUMMARIES_SUCCESS:
      let newState = [Object.assign({}, ...state)];
      for (let i = 0; i < action.players.length; i++) {
        let steam_getPlayerSummary = action.players[i];
        if (steam_getPlayerSummary.steamid !== state[0].steam_getPlayerSummary.steamid) {
          let newPlayer = {};
          newPlayer.steam_getPlayerSummary = steam_getPlayerSummary;
          newState.push(newPlayer);
        }
      }
      return newState;
    default:
      return state;
  }
}
