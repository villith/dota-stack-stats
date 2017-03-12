import React, { PropTypes } from 'react';
import MatchListRow from './MatchListRow';

let MatchList = ({ matches }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>HERO</th>
          <th>RESULT</th>
          <th>LENGTH</th>
          <th>K</th>
          <th>D</th>
          <th>A</th>
        </tr>
      </thead>
      <tbody>
        {matches.map(match =>
          <MatchListRow key={match.matchID} match={match}/>
        )}
      </tbody>
    </table>
  );
};

MatchList.propTypes = {
  matches: PropTypes.array.isRequired
};

export default MatchList;
