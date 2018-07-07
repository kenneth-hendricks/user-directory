import React from 'react';

const UserCard = ({ user }) => (
  <div className="card user">
    {user.name.first} {user.name.last}
  </div>
);

export default UserCard;