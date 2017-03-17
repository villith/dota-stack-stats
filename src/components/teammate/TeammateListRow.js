import React, { PropTypes } from 'react';
import { Link } from 'react-router';

let TeammateListRow = ({ teammate }) => {
  let teammateNameStyle = {
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
  let winPercentage = (teammate.winCount / teammate.matchCount * 100).toFixed(2);
  return (
    <tr className="teammatelist-row">
      <td><img src={teammate.avatarsmall}/></td>
      <td style={teammateNameStyle} className="col-md-6">{teammate.name}</td>
      <td className="col-md-2">{teammate.matchCount || 0} </td>
      {teammate.matchCount > 0 && <td className="col-md-2">{winPercentage}%</td>}
      {teammate.matchCount === 0 && <td className="col-md-2">-</td>}
    </tr>
  );
};

TeammateListRow.propTypes = {
  teammate: PropTypes.object.isRequired
};

export default TeammateListRow;
