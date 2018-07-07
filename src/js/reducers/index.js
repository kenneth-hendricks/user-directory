import { combineReducers } from 'redux';
import users from './users';
import searchTerm from './searchTerm';

export default combineReducers({
  users,
  searchTerm,
});
