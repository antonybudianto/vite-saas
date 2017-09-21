import { combineReducers } from 'redux';

import auth from './auth';
import nav from './nav';

const reducers = combineReducers({
  auth,
  nav
});

export default reducers;
