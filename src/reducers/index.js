import { combineReducers } from 'redux';
import matches from './matchReducer';
import player from './playerReducer';

const rootReducer = combineReducers({
  matches,
  player
});

export default rootReducer;
