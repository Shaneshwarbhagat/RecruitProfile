import { combineReducers } from 'redux';
import profileReducer from './reducer';

const rootReducer = combineReducers({
  profile: profileReducer
});

export default rootReducer;