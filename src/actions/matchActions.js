import * as types from './actionTypes';
import matchApi from '../apiInterfaces/matchApiInterface';

let steam_getMatchHistorySuccess = matches => {
  return { type: types.STEAM_GETMATCHHISTORY_SUCCESS, matches };
};

let steam_getMatchDetailsSuccess = match => {
  return { type: types.STEAM_GETMATCHDETAILS_SUCCESS, match };
};

let steam_getMatchHistory = playerID => {
  return dispatch => {
    return matchApi.steam_getMatchHistory(playerID, 20).then(res => {
      let matches = [];
      let resMatches = res.result.matches;
      for (let i = 0; i < resMatches.length; i++) {
        let match = resMatches[i];
        let structuredMatchObj = {};
        structuredMatchObj.steam_getMatchHistory = match;
        let matchID = structuredMatchObj.steam_getMatchHistory.match_id;
        matchApi.steam_getMatchDetails(matchID).then(res => {
          let match = res.result;
          structuredMatchObj.steam_getMatchDetails = match;
          matches.push(structuredMatchObj);
          if (i === resMatches.length - 1) {
            return dispatch(steam_getMatchHistorySuccess(matches));
          }
        }).catch(error => {
          throw(error);
        });
      }
    }).catch(error => {
      throw(error);
    });
  };
};

module.exports = {
  steam_getMatchHistory: steam_getMatchHistory
};
