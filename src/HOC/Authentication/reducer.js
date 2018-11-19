import decode from 'jwt-decode';
import {types} from './actions';
import conf from '../../config';

const initialState = {
  user: null,
  isAuthenticated: false,
};

export default function reducer(state = initialState, action) {
  try {
    const current_time = Date.now() / 1000;
    const token = localStorage.getItem('token');
    let {exp, iat, ...user} = decode(token);
    const roles = Object.values(conf.user.roles);
    let userRoles = 0;
    user.roles.forEach((role) => {
      const index = roles.map((r) => r.name).indexOf(role);
      if(index !== -1) {
        userRoles |= roles[index].value;
      }
    });
    user.isUser = (userRoles & conf.user.roles.user.value) > 0;
    user.isAdmin = (userRoles & conf.user.roles.admin.value) > 0;
    user.isSuperAdmin = (userRoles & conf.user.roles.superAdmin.value) > 0;

    if(action.type === types.LOGIN_SUCCESS) {
      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    else if(action.type === types.LOGIN_FAIL) {
      return {
        ...state,
        isAuthenticated: false,
      }
    }
    else if(action.type === types.LOGOUT_SUCCESS) {
      return {
        ...state,
        isAuthenticated: false,
      }
    }
    else {
      let isAuthenticated = true;
      if (exp < current_time) {
        localStorage.removeItem('token');
        isAuthenticated = false;
      }

      return {
        ...state,
        isAuthenticated,
        user,
      }
    }
  } catch(e) {
    return {
      ...state,
      isAuthenticated: false,
    }
  }
};