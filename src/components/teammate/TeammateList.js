import React, { PropTypes } from 'react';
import TeammateListRow from './TeammateListRow';

let TeammateList = ({ teammates }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>PLAYER</th>
          <th>MATCHES</th>
          <th>WIN %</th>
        </tr>
      </thead>
      <tbody>
        {teammates.map(teammate =>
          <TeammateListRow key={teammate.steamid32} teammate={teammate}/>
        )}
      </tbody>
    </table>
  );
};

TeammateList.propTypes = {
  teammates: PropTypes.array.isRequired
};

export default TeammateList;
