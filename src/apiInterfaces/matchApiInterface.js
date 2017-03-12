/* eslint-disable no-console */

export default function getMatches(playerID) {
  let url = `https://api.opendota.com/api/players/${playerID}/matches?limit=20`;
  return fetch(url).then(res => {
    return res.json();
  });
}

let getMatchInfo = matchID => {
  let url = `https://api.opendota.com/api/matches/${matchID}`;
  return fetch(url).then(res => {
    return res.json();
  });
};
