import {combineReducers} from 'redux';
import authReducer from './Auth/auth';

export default combineReducers({
  auth: authReducer,
});
