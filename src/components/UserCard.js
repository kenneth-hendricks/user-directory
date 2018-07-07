import React from 'react';
import { capitalizeFirstLetter } from '../utils';

const UserCard = ({ user }) => (
  <div className="card user">
    <div className="card-body">
      <h5 className="card-title">{displayName(user)}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{user.email}</h6>
    </div>
  </div>
);

const displayName = (user) => (
  capitalizeFirstLetter(user.name.first) + " " + capitalizeFirstLetter(user.name.last)
);

export default UserCard;