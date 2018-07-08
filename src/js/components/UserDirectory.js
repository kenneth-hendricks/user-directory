import React from 'react';
import { connect } from 'react-redux';
import UserGrid from './UserGrid';
import NoUsersMessage from './NoUsersMessage';
import SearchBar from './SearchBar';

const UserDirectory = ({ users }) => ( 
  <div className="user-directory">
    <SearchBar />
    {users.length ?
      (
        <UserGrid users={users} />
      ) : (
        <NoUsersMessage />
      )
    }
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

export default connect(mapStateToProps) (UserDirectory);