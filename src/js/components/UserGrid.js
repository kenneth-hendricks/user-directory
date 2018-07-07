import React from 'react';
import UserCard from './UserCard';

const UserGrid = ({ users }) => {
  return (
    <div className="row">
      {users.map((user, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
}

export default UserGrid;