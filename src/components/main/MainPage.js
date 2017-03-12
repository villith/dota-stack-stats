import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayerActions from '../../actions/playerActions';
import * as MatchActions from '../../actions/matchActions';
import PlayerStats from '../player/PlayerStats';
import TeammateList from '../teammate/TeammateList';
import MatchList from '../match/MatchList';
import formatPlayerResponse from '../../selectors/formatPlayerResponse';
import formatMatchesResponse from '../../selectors/formatMatchesResponse';
import getTeammates from '../../selectors/getTeammates';
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
    let { player } = this.props;
    let { teammates } = this.props;
    let { matches } = this.props;
    return (
      <div>
        <div className="row col-md-8">
          <PlayerStats player={player}/>
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
  player: PropTypes.object.isRequired,
  teammates: PropTypes.array.isRequired,
  matches: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let player = state.player;
  player = formatPlayerResponse(player);

  let matches = state.matches;
  matches = matches.map(match => {
    let reformattedMatch = formatMatchesResponse(match);
    return reformattedMatch;
  });

  let teammates = [];

  return {
    player: player,
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
