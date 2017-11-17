import { combineReducers } from 'redux';
import authReducer from './auth';
import memo from "./memo";


export default combineReducers({
  auth: authReducer,
  memo
})
