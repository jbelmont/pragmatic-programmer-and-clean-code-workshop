import React, { PropTypes } from 'react';
import UserContainer from './UserContainer.jsx';

const PragProgCleanCode = ({ users }) => (
  <ul>
    {users.map(user =>
      <UserContainer user={user} />
    )}
  </ul>
);

export default PragProgCleanCode;