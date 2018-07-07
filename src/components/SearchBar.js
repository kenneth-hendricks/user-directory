import React from 'react';
import  { connect } from 'react-redux';

const SearchBar = () => (
  <nav className="navbar navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">UserDirectory</a>
      <form className="form-inline">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </nav>
);

export default SearchBar;
