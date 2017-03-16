import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function matchReducer(state = initialState.matches, action) {
  switch (action.type) {
    case types.STEAM_GETMATCHHISTORY_SUCCESS:
      return action.matches;
    case types.STEAM_GETMATCHDETAILS_SUCCESS:
      return;
    default:
      return state;
  }
}
