import playerIDs from '../resources/playerIDs';

let getSteamID32 = steamID64 => {
  let players = playerIDs.players;
  let keys = Object.keys(players);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let player = players[key];
    if (player[0] === steamID64) {
      return player[1];
    }
  }
};

let steam_getPlayerSummary = player => {
  let steamID64 = player.steam_getPlayerSummary.steamid;
  let steamID32 = getSteamID32(steamID64);

  let formattedResponse = {
    steamid64: steamID64,
    steamid32: steamID32, // "836338790"
    name: player.steam_getPlayerSummary.personaname, // "Tricepz"
    avatar: player.steam_getPlayerSummary.avatarfull, // "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e3/e3e3def7d1ca0deba0b257be63926f6c2b9e6eae.jpg"
    avatarsmall: player.steam_getPlayerSummary.avatar,
    avatarmedium: player.steam_getPlayerSummary.avatarmedium,
    statLine: {
      soloMMR: 4676, // res.OD_getPlayers.solo_competitive_rank, // 4676
      partyMMR: 4691, // res.OD_getPlayers.competitive_rank, // 4691
      estimatedMMR: 4489, // res.OD_getPlayers.mmr_estimate.estimate, // 4489
      wins: 1453, // res.OD_getPlayers_wl.win, // 1453
      losses: 1335 // res.OD_getPlayers_wl.lose // 1335
    }
  };

  return formattedResponse;
};

let OD_getPlayer = res => {

};

let OD_getPlayerWL = res => {

};

module.exports = {
  steam_getPlayerSummary: steam_getPlayerSummary,
  OD_getPlayer: OD_getPlayer,
  OD_getPlayerWL: OD_getPlayerWL
};
