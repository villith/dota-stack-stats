import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerActions from '../../actions/playerActions';
import MatchActions from '../../actions/matchActions';
import PlayerStats from '../player/PlayerStats';
import TeammateList from '../teammate/TeammateList';
import MatchList from '../match/MatchList';
import formatPlayerResponse from '../../selectors/formatPlayerResponse';
import formatMatchesResponse from '../../selectors/formatMatchesResponse';
import formatTeammates from '../../selectors/formatTeammates';
import { browserHistory } from 'react-router';

class MainPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  // matchRow(match, index) {
  //   return <div key={index}>{match.title}</div>;
  // }

  // redirectToAddMatchPage() {
  //   browserHistory.push('/match');
  // }

  render() {
    let { players } = this.props;
    let { teammates } = this.props;
    let { matches } = this.props;
    let { mainPlayer } = this.props;
    return (
      <div>
        <div className="row col-md-8">
          <PlayerStats player={mainPlayer}/>
        </div>
        <div className="row">
          <div className="col-md-8">
            <MatchList matches={matches}/>
          </div>
          <div className="col-md-4">
            <TeammateList teammates={teammates}/>
          </div>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  players: PropTypes.array.isRequired,
  mainPlayer: PropTypes.object.isRequired,
  teammates: PropTypes.array.isRequired,
  matches: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let players = state.players;
  players = players.map(player => {
    let reformattedPlayer = formatPlayerResponse.steam_getPlayerSummary(player);
    return reformattedPlayer;
  });

  let getMainPlayer = () => {
    for (let i = 0; i < players.length; i++) {
      let player = players[i];
      if (player.steamid32 === "83633790") {
        return player;
      }
    }
  };

  let mainPlayer = getMainPlayer();
  let matches = state.matches;
  matches = matches.map(match => {
    let reformattedMatch = formatMatchesResponse.formatMatchesResponse(match, mainPlayer.steamid32);
    return reformattedMatch;
  });

  let teammates = [];

  console.log('MAP STATE TO PROPS');
  console.log([players, mainPlayer, teammates, matches]);
  return {
    players: players,
    mainPlayer: mainPlayer,
    teammates: teammates,
    matches: matches
  };
}

function mapDispatchToProps(dispatch) {
  return {
    playerActions: bindActionCreators(PlayerActions, dispatch),
    matchActions: bindActionCreators(MatchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
