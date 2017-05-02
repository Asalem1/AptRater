import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import auth from './auth';

export default combineReducers({
  user,
  runtime,
  auth
});
