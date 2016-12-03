import axios from 'axios';
import {
  DOOR_UPDATE,
  DOOR_CREATE,
  FETCH_DOORS_SUCCESS
} from './types';

export const doorUpdate = ({ prop, value }) => {
  return {
    type: DOOR_UPDATE,
    payload: { prop, value }
  };
};

export const doorCreate = () => {
  return {
    type: DOOR_CREATE
  };
};

export const doorsFetch = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/api/v1/doors')
      .then(response => {
        dispatch({ type: FETCH_DOORS_SUCCESS, payload: response.data });
      })
      .catch(error => console.log(error.response.data));
  };
};
