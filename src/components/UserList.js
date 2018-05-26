import React from 'react';
import { connect } from 'react-redux';

const UserList = ({ userList }) => (
  <ul>
    {userList.map((user, i) => (
      <li key={i}>{user.name.title} {user.name.first} {user.name.last}</li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  userList: state
})

export default connect(mapStateToProps) (UserList);