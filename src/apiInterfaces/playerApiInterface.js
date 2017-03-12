/* eslint-disable no-console */

let getPlayers = playerID => {
  let url = `https://api.opendota.com/api/players/${playerID}`;
  return fetch(url).then(res => {
    return res.json();
  });
};

let getPlayersWL = playerID => {
  let url = `https://api.opendota.com/api/players/${playerID}/wl`;
  return fetch(url).then(res => {
    return res.json();
  });
};

let gatherResponses = playerID => {
  let OD_getPlayers = getPlayers(playerID);
  let OD_getPlayers_wl = getPlayersWL(playerID);
  let completeResponse = {
    OD_getPlayers: OD_getPlayers,
    OD_getPlayers_wl: OD_getPlayers_wl
  };
  return completeResponse;
};

export default function getPlayer(playerID) {
  return gatherResponses(playerID);
}
