import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import authReducer from '../HOC/Authentication/reducer';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: authReducer,
})