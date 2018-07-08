import React from 'react';
import { connect } from 'react-redux';
import UserGrid from './UserGrid';
import NoUsersMessage from './NoUsersMessage';
import SearchBar from './SearchBar';

const UserDirectory = ({ users }) => {
  const hasUsers = users.length;

  let content;
  if (hasUsers) {
    content = (<UserGrid users={users} />);
  } else {
    content = (<NoUsersMessage />);
  }

  return (
    <div className="user-directory">
      <SearchBar />
      { content }
    </div>
  );
}

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