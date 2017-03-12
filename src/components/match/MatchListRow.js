import React, { PropTypes } from 'react';
import { Link } from 'react-router';

let MatchListRow = ({ match }) => {
  let iconClassName = `d2mh hero-${match.heroID}`;
  let heroNameStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    fontVariant: 'small-caps'
  };
  let winStyle = {
    color: 'green'
  };
  let lossStyle = {
    color: 'red'
  };
  
  return (
    <tr className="matchlist-row">
      <td style={heroNameStyle} className="col-md-4"><i className={iconClassName}></i>  {match.heroName}</td>
      {match.result === "WIN" && <td className="col-md-2" style={winStyle}>{match.result}</td>}
      {match.result === "LOSS" && <td className="col-md-2" style={lossStyle}>{match.result}</td>}
      <td className="col-md-2">{match.duration}</td>
      <td className="col-md-1">{match.kills}</td>
      <td className="col-md-1">{match.deaths}</td>
      <td className="col-md-1">{match.assists}</td>
    </tr>
  );
};

MatchListRow.propTypes = {
  match: PropTypes.object.isRequired
};

export default MatchListRow;
