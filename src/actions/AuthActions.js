import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { API_URL } from '../config';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  NETWORK_FAILURE
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
      url: `${API_URL}/sessions`,
      responseType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        session: { email, password }
      },
      timeout: 5000 // doesn't work?
    })
    .then(user => loginUserSuccess(dispatch, user))
    .catch(error => {
      if (error.response) {
        loginUserFail(dispatch, error);
      } else {
        networkFailure(dispatch)
      }
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

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error.response.data.error
  });
};

const networkFailure = (dispatch) => {
  dispatch({ type: NETWORK_FAILURE });
};
