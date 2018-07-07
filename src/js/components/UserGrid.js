import React from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

const UserGrid = ({ users }) => (
  <div className="row">
    {users.map((user, i) => (
      <div className="col-lg-4 col-md-6" key={i}>
        <UserCard user={user} />
      </div>
    ))}
  </div>
);

const filterUsers = (users, searchTerm) => {
  return users.filter((user) => {
    let userName = user.name.first + " " + user.name.last;
    let lowerCaseSearchTerm = searchTerm.toLowerCase(); // Will make search case insensitive.
    return userName.includes(lowerCaseSearchTerm);
  });
};

const mapStateToProps = (state) => ({
  users: filterUsers(state.users, state.searchTerm)
})

export default connect(mapStateToProps) (UserGrid);