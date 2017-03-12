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
  return (
    <tr className="teammatelist-row">
      <td style={teammateNameStyle} className="col-md-5"><img src={teammate.avatar}/> {teammate.name}</td>
      <td className="col-md-3">placeholder</td>
      <td className="col-md-3">placeholder</td>
    </tr>
  );
};

TeammateListRow.propTypes = {
  teammate: PropTypes.object.isRequired
};

export default TeammateListRow;
