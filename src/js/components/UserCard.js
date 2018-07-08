import React from 'react';
import { capitalizeFirstLetter } from '../utils';
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => (
  <Link to="/user">
    <div className="card user">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-3 align-self-center">
            <img className="thumbnail" src={user.picture.thumbnail} />
          </div>
          <div className="col-9">
            <div className="card-title">{displayName(user)}</div>
            <div className="card-subtitle text-muted">{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const displayName = (user) => (
  capitalizeFirstLetter(user.name.first) + " " + capitalizeFirstLetter(user.name.last)
);

export default UserCard;