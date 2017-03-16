import { combineReducers } from 'redux';
import matches from './matchReducer';
import players from './playerReducer';

const rootReducer = combineReducers({
  matches,
  players
});

export default rootReducer;
