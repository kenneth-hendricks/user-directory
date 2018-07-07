import React from 'react';
import { connect } from 'react-redux';
import UserGrid from './UserGrid';
import NoUsersMessage from './NoUsersMessage';
import SearchBar from './SearchBar';

class App extends React.Component {
  componentDidMount() {
    const { loadNewUsers } = this.props;
    loadNewUsers();
  }
  render() {
    const { users } = this.props;
    const hasUsers = users.length;

    let content;
    if (hasUsers) {
      content = (<UserGrid users={users} />);
    } else {
      content = (<NoUsersMessage />);
    }
    return (
      <div id="app">
        <div className="container">
          <SearchBar />
          { content }
        </div>
      </div>
    );
  }
}

const filterUsers = (users, searchTerm) => {
  return users.filter((user) => {
    let userName = user.name.first + " " + user.name.last;
    let lowerCaseSearchTerm = searchTerm.toLowerCase(); // Will make search case insensitive.
    return userName.includes(lowerCaseSearchTerm);
  });
};

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

const mapStateToProps = (state) => ({
  users: filterUsers(state.users, state.searchTerm)
})

export default connect(mapStateToProps, mapDispatchToProps) (App);