import heroIDs from '../resources/heroIDs';

export default function formatResponse(res) {
  let OD_getMatches = {
    "match_id": 3046808012,
    "player_slot": 130,
    "radiant_win": false,
    "duration": 1620,
    "game_mode": 22,
    "lobby_type": 7,
    "hero_id": 2,
    "start_time": 1489162836,
    "version": 17,
    "kills": 5,
    "deaths": 0,
    "assists": 7
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

  let formattedResponse = {
    matchID: res.match_id,
    heroID: res.hero_id,
    heroName: heroIDtoName(res.hero_id),
    result: didPlayerWin(res.player_slot, res.radiant_win),
    duration: durationToReadableTime(res.duration),
    kills: res.kills,
    deaths: res.deaths,
    assists: res.assists
  };

  return formattedResponse;
}
