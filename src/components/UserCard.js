import React from 'react';
import { capitalizeFirstLetter } from '../utils';

const UserCard = ({ user }) => (
  <div className="card user">
    <div className="card-body">
      {displayName(user)}
    </div>
  </div>
);

const displayName = (user) => (
  capitalizeFirstLetter(user.name.first) + " " + capitalizeFirstLetter(user.name.last)
);

export default UserCard;