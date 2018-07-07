import React from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

const UserList = ({ userList }) => (
  <div className="row">
    {userList.map((user, i) => (
      <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
        <UserCard user={user} />
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  userList: state
})

export default connect(mapStateToProps) (UserList);