import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import API_URL from '../config';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    axios({
      method: 'POST',
      url: `${API_URL}/users/auth`, // unconfirmed url
      responseType: 'json',
      headers: {
        'Accept': 'application/json',  // need auth headers
        'Content-Type': 'application/json'
      },
      data: {
        user: { email, password }
      }
    })
    .then(user => loginUserSuccess(dispatch, user))
    .catch(error => {
      console.log(error);
      loginUserFail(dispatch);
    });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
