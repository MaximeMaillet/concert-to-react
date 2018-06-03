import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr'

import authReducer from '../HOC/Authentication/reducer';
import searchReducer from '../HOC/Search/reducer';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: authReducer,
  toastr: toastrReducer,
  search: searchReducer,
})