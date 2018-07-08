import React from 'react';
import { connect } from 'react-redux';
import UserDirectory from './UserDirectory';

class App extends React.Component {
  componentDidMount() {
    const { loadNewUsers } = this.props;
    loadNewUsers();
  }
  render() {
    return (
      <div id="app" className="container">
          <UserDirectory />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadNewUsers: () => {
    fetch('https://randomuser.me/api/?results=96&nat=au')
      .then((response) => response.json())
      .then((response) => dispatch({
        type: "UPDATE_USERS",
        users: response.results,
      })
    );
  }
});

export default connect(null, mapDispatchToProps) (App);