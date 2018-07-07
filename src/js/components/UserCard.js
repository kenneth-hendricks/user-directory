import React from 'react';
import { capitalizeFirstLetter } from '../utils';

const UserCard = ({ user }) => (
  <div className="card user">
    <div className="card-body">
      <div className="row align-items-center">
        <div class="col-3 align-self-center">
          <img className="thumbnail" src={user.picture.thumbnail} />
        </div>
        <div className="col-9">
          <div className="card-title">{displayName(user)}</div>
          <div class="card-subtitle text-muted">{user.email}</div>
        </div>
      </div>
    </div>
  </div>
);

const displayName = (user) => (
  capitalizeFirstLetter(user.name.first) + " " + capitalizeFirstLetter(user.name.last)
);

export default UserCard;