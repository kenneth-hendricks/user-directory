import React from 'react';
import { connect } from 'react-redux';

const UserList = ({ userList }) => (
  <div className="row">
    {userList.map((user, i) => (
      <div className="col-3" key={i}>
        <div className="card user">
          {user.name.first} {user.name.last}
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  userList: state
})

export default connect(mapStateToProps) (UserList);