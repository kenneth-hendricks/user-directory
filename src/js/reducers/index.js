import { combineReducers } from 'redux';
import users from './users';
import usersLoading from './usersLoading';
import searchTerm from './searchTerm';

export default combineReducers({
  users,
  usersLoading,
  searchTerm,
});
