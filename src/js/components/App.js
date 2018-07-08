import React from 'react';
import { connect } from 'react-redux';
import UserDirectory from './UserDirectory';

class App extends React.Component {
  componentDidMount() {
    const { loadNewUsers } = this.props;
    loadNewUsers();
  }
  render() {
    let {loading} = this.props;
    return (
      <div id="app" className="container">
        {loading ?
          (
            <div>Loading UserDirectory ...</div>
          ) :
          (
            <UserDirectory />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.usersLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loadNewUsers: () => {
    fetch('https://randomuser.me/api/?results=96&nat=au')
      .then((response) => response.json())
      .then((response) => dispatch({
        type: "UPDATE_USERS",
        users: response.results,
      })).then(() => dispatch({
        type: "USERS_LOADED",
      }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps) (App);