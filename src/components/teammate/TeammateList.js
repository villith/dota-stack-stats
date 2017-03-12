import React, { PropTypes } from 'react';
import TeammateListRow from './TeammateListRow';

let TeammateList = ({ teammates }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>PLAYER</th>
          <th>MATCHES</th>
          <th>WIN %</th>
        </tr>
      </thead>
      <tbody>
        {teammates.map(teammate =>
          <TeammateListRow key={teammate.playerID} teammate={teammate}/>
        )}
      </tbody>
    </table>
  );
};

TeammateList.propTypes = {
  teammates: PropTypes.array.isRequired
};

export default TeammateList;
