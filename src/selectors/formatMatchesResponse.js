import heroIDs from '../resources/heroIDs';
import playerIDs from '../resources/playerIDs';
import matchApi from '../apiInterfaces/matchApiInterface';

let findPlayerInSteamGetMatchDetails = (match, playerID) => {
  let players = match.steam_getMatchDetails.players;
  for (let i = 0; i < players.length; i++) {
    let player = players[i];
    if (player.account_id == playerID) {
      return player;
    }
  }
};

let getTeammates = match => {
  let teammates = [];
  let players = playerIDs.players;
  let keys = Object.keys(players);
  let matchPlayers = match.players;
  for (let i = 0; i < matchPlayers.length; i++) {
    let matchPlayer = matchPlayers[i];
    for (let k = 0; k < keys.length; k++) {
      let key = keys[k];
      let player = players[key];
      if (matchPlayer.account_id == player[1]) {
        teammates.push(matchPlayer);
      }
    }
  }
  return teammates;
};

let heroIDtoName = heroID => {
  let heroes = heroIDs.heroes;
  for (let i = 0; i < heroes.length; i++) {
    let heroObj = heroes[i];
    if (heroObj.id === heroID) {
      return heroObj.localized_name;
    }
  }
  return 'Hero Not Found';
};

let getPlayerInfo = playerID => {

};

let didPlayerWin = (player_slot, radiant_win) => {
  let radiantSlots = [0, 1, 2, 3, 4];
  let direSlots = [128, 129, 130, 131, 132];
  let playerSide;
  if (radiantSlots.includes(player_slot)) {
    playerSide = 'radiant';
  }
  else {
    playerSide = 'dire';
  }

  if (radiant_win === true) {
    if (playerSide === 'radiant') {
      return 'WIN';
    }
    else {
      return 'LOSS';
    }
  }

  if (radiant_win === false) {
    if (playerSide === 'radiant') {
      return 'LOSS';
    }
    else {
      return 'WIN';
    }
  }
};

let durationToReadableTime = duration => {
  let readable = new Date(0,0,0);
  readable.setSeconds(duration);
  let hours = readable.getHours().toString();
  let minutes = readable.getMinutes().toString();
  let seconds = readable.getSeconds().toString();


  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }

  if (seconds.length === 1) {
    seconds = `0${seconds}`;
  }

  if (hours !== '0') {
    return `${hours}:${minutes}:${seconds}`;
  }
  else {
    return `${minutes}:${seconds}`;
  }
};

let formatMatchesResponse = (match, playerID) => {
  let player = findPlayerInSteamGetMatchDetails(match, playerID);
  let formattedResponse = {
    matchID: match.steam_getMatchHistory.match_id,
    heroID: player.hero_id,
    heroName: heroIDtoName(player.hero_id),
    result: didPlayerWin(player.player_slot, match.steam_getMatchDetails.radiant_win),
    duration: durationToReadableTime(match.steam_getMatchDetails.duration),
    kills: player.kills,
    deaths: player.deaths,
    assists: player.assists,
    teammates: getTeammates(match.steam_getMatchDetails)
  };

  return formattedResponse;
};

module.exports = {
  formatMatchesResponse: formatMatchesResponse,
  findPlayerInSteamGetMatchDetails: findPlayerInSteamGetMatchDetails
};
