import React from 'react';

const UserCard = ({ user }) => (
  <div className="card user">
    <div className="card-body">
      {user.name.first} {user.name.last}
    </div>
  </div>
);

export default UserCard;