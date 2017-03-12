import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function matchReducer(state = initialState.matches, action) {
  switch (action.type) {
    case types.LOAD_MATCHES_SUCCESS:
      return action.matches;
    default:
      return state;
  }
}
