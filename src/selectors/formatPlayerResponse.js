export default function formatResponse(res) {
  let OD_getPlayers = {
    competitive_rank: "4691",
    mmr_estimate: {
      estimate: 4489,
      n: 20,
      stdDev: 266.5520587052368
    },
    profile: {
      account_id: 83633790,
      avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e3/e3e3def7d1ca0deba0b257be63926f6c2b9e6eae.jpg",
      avatarfull: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e3/e3e3def7d1ca0deba0b257be63926f6c2b9e6eae_full.jpg",
      avatarmedium: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e3/e3e3def7d1ca0deba0b257be63926f6c2b9e6eae_medium.jpg",
      cheese: 0,
      last_login: "2016-12-03T17:58:23.439Z",
      loccountrycode: "US",
      name: null,
      personaname: "Tricepz",
      profileurl: "http://steamcommunity.com/profiles/76561198043899518/",
      steamid: "76561198043899518"
    },
    solo_competitive_rank: "4676",
    tracked_until: "1491281645"
  };
  let OD_getPlayers_wl = {
    win: 1453,
    lose: 1335
  };

  let formattedResponse = {
    name: res.OD_getPlayers.profile.personaname, // "Tricepz"
    avatar: res.OD_getPlayers.profile.avatarfull, // "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e3/e3e3def7d1ca0deba0b257be63926f6c2b9e6eae.jpg"
    statLine: {
      soloMMR: res.OD_getPlayers.solo_competitive_rank, // 4676
      partyMMR: res.OD_getPlayers.competitive_rank, // 4691
      estimatedMMR: res.OD_getPlayers.mmr_estimate.estimate, // 4489
      wins: res.OD_getPlayers_wl.win, // 1453
      losses: res.OD_getPlayers_wl.lose // 1335
    }
  };

  return formattedResponse;
}
