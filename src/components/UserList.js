import React from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

const UserList = ({ userList }) => (
  <div className="row">
    {userList.map((user, i) => (
      <div className="col-3" key={i}>
        <UserCard user={user}></UserCard>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  userList: state
})

export default connect(mapStateToProps) (UserList);