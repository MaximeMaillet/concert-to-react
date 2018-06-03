import decode from 'jwt-decode';
import {types} from './actions';

const initialState = {
  user: null,
  isAuthenticated: false,
};

export default function reducer(state = initialState, action) {
  if(action.type === types.LOGIN_SUCCESS) {
    return {
      ...state,
      isAuthenticated: true,
    };
  } else if(action.type === types.LOGIN_FAIL) {
    return {
      ...state,
      isAuthenticated: false,
    }
  } else if(action.type === types.LOGOUT_SUCCESS) {
    return {
      ...state,
      isAuthenticated: false,
    }
  } else {
    const current_time = Date.now() / 1000;
    const token = localStorage.getItem('token');

    if(!token) {
      return {
        ...state,
        isAuthenticated: false,
      };
    }

    const {exp, iat, ...user} = decode(token);
    if ( exp < current_time) {
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
      };
    } else {
      return {
        ...state,
        isAuthenticated: true,
        user: user,
      };
    }
  }
};