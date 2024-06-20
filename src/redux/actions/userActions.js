import axios from '../../axiosConfig';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/auth/login', { email, password });
    
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('userType', res.data.userType);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('userType');

  dispatch({ type: LOGOUT });
};
