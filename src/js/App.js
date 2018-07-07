import React from 'react';
import UserGrid from './components/UserGrid';
import SearchBar from './components/SearchBar';

const App = () => (
  <div id="app">
    <SearchBar />
    <div className="container">
      <UserGrid />
    </div>
  </div>
);

export default App;
