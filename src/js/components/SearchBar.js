import React from 'react';
import  { connect } from 'react-redux';

const SearchBar = ({ updateSearchTerm }) => {
  let input;
  return (
    <form className="search-form">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        ref={node => input = node}
        onChange={(event) => updateSearchTerm(event)}
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateSearchTerm: (event) => {
    dispatch({
      type: "UPDATE_SEARCH_TERM",
      searchTerm: event.target.value,
    });
  }
});

export default connect(null, mapDispatchToProps) (SearchBar);