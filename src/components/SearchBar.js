import React from 'react';
import  { connect } from 'react-redux';

const SearchBar = ({ updateSearchTerm }) => {
  let input;
  return (
    <nav className="navbar navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">UserDirectory</a>
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          ref={node => input = node}
          onChange={() => updateSearchTerm(input.value)}/>
      </form>
    </div>
  </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateSearchTerm: (searchTerm) => {
    dispatch({
      type: "UPDATE_SEARCH_TERM",
      searchTerm: searchTerm,
    });
  }
});

export default connect(null, mapDispatchToProps) (SearchBar);