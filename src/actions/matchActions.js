import * as types from './actionTypes';
import matchApi from '../apiInterfaces/matchApiInterface';

export function loadMatchesSuccess(matches) {
  return { type: types.LOAD_MATCHES_SUCCESS, matches };
}

export default function loadMatches(playerID) {
  return dispatch => {
    return matchApi(playerID).then(matches => {
      return dispatch(loadMatchesSuccess(matches));
    }).catch(error => {
      throw(error);
    });
  };
}
