/* eslint-disable no-console */
let APIKey = 'A9F8F8AE71DB176986D19B3645B3EE4F';
let corsAnywhere = 'http://localhost:8080/';
let getMatchHistory = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1/';
let getMatchDetails = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1/';

let steam_getMatchHistory = (playerID, numMatches) => {
  let url = `${corsAnywhere}${getMatchHistory}?key=${APIKey}&account_id=${playerID}&matches_requested=${numMatches}`;
  return fetch(url).then(res => {
    return res.json();
  });
};

let steam_getMatchDetails = matchID => {
  let url = `${corsAnywhere}${getMatchDetails}?key=${APIKey}&match_id=${matchID}`;
  return fetch(url).then(res => {
    return res.json();
  });
};

let OD_getMatchInfo = matchID => {
  let url = `https://api.opendota.com/api/matches/${matchID}`;
  return fetch(url).then(res => {
    return res.json();
  });
};

module.exports = {
  steam_getMatchHistory: steam_getMatchHistory,
  steam_getMatchDetails: steam_getMatchDetails,
  OD_getMatchInfo: OD_getMatchInfo
};
