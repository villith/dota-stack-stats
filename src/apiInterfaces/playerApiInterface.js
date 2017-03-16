/* eslint-disable no-console */

let APIKey = 'A9F8F8AE71DB176986D19B3645B3EE4F';
let corsAnywhere = 'http://localhost:8080/';
let getPlayerSummary = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';

let steam_getPlayerSummaries = playerIDs => {
  let createPlayerIDsString = () => {
    let playerIDsString = '';
    let players = playerIDs.players;
    let keys = Object.keys(players);
    for (let i = 0; i < keys.length; i++) {
      let playerName = keys[i];
      let player = players[playerName];
      let steamID = player[0];
      let dotaID = player[1];
      playerIDsString += `${steamID},`;
    }
    playerIDsString = playerIDsString.slice(0, playerIDsString.length - 1);
    return playerIDsString;
  };
  let playerIDsString = createPlayerIDsString();
  let url = `${corsAnywhere}${getPlayerSummary}?key=${APIKey}&steamids=${playerIDsString}`;
  return fetch(url).then(res => {
    return res.json();
  });
};

let OD_getPlayer = playerID => {
  let url = `https://api.opendota.com/api/players/${playerID}`;
  return fetch(url).then(res => {
    return res.json();
  });
};

let OD_getPlayerWL = playerID => {
  let url = `https://api.opendota.com/api/players/${playerID}/wl`;
  return fetch(url).then(res => {
    return res.json();
  });
};

// let gatherResponses = playerIDs => {
//   let steam_getPlayerSummaries = steam_getPlayerSummaries(playerIDs);
//   // let OD_getPlayer_wl = OD_getPlayerWL(playerID);
//   let completeResponse = {
//     steam_getPlayerSummaries: steam_getPlayerSummaries
//     // OD_getPlayer_wl: OD_getPlayer_wl
//   };
//   return completeResponse;
// };

module.exports = {
  steam_getPlayerSummaries: steam_getPlayerSummaries,
  OD_getPlayer: OD_getPlayer,
  OD_getPlayerWL: OD_getPlayerWL
};
