import React from 'react';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar'
import './App.css'

const App = () => (
  <div id="app">
    <SearchBar />
    <div className="container">
      <UserList />
    </div>
  </div>
);

export default App;
