import decode from 'jwt-decode';

export const types = {
  LOGIN_SUCCESS: 'login/success',
  LOGIN_FAIL: 'login/fail',
  LOGOUT_SUCCESS: 'logout/success',
};

export function login(token) {
  return async (dispatch, getState) => {
    try {
      localStorage.setItem('token', token);
      const decoded = decode(token);
      dispatch(loginSuccess(decoded));
    } catch(e) {
      console.log(e);
      dispatch(loginFail(e));
    }
  }
}

export function logout() {
  return async(dispatch, getState) => {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
  }
}

export function loginSuccess(decoded) {
  return {
    type: types.LOGIN_SUCCESS,
    user: decoded,
  }
}

export function loginFail(error) {
  return {
    type: types.LOGIN_FAIL,
  }
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS
  }
}

export default {
  login,
  logout,
}