import React from 'react';
import { connect } from 'react-redux';
import UserGrid from './components/UserGrid';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  componentDidMount() {
    const { loadNewUsers } = this.props;
    loadNewUsers();
  }

  render() {
    return (
      <div id="app">
        <div className="container">
          <SearchBar />
          <UserGrid />
        </div>
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
      }));
  }
});

export default connect(null, mapDispatchToProps) (App);