import axios from 'axios';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
  DOOR_UPDATE,
  DOOR_CREATE,
  FETCH_DOORS_SUCCESS
} from './types';

const API_URL = 'http://localhost:3000/api/v1';

export const doorUpdate = ({ prop, value }) => {
  return {
    type: DOOR_UPDATE,
    payload: { prop, value }
  };
};

export const doorCreate = ({ orientation, puerta_abre, cerradura, cierrapuertas, segmentar }) => {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: `${API_URL}/doors`,
      responseType: 'json',
      headers: { 'Content-Type': 'application/json' },
      data: {
        door: { orientation, puerta_abre, cerradura, cierrapuertas, segmentar }
      }
    })
    .then((response) => {
      dispatch({ type: DOOR_CREATE });
      console.log(response);
      Actions.doorlist({ type: ActionConst.RESET });
    })
    .catch(error => console.log(error.response.data));
  };
};

export const doorsFetch = () => {
  return (dispatch) => {
    return axios.get(`${API_URL}/doors`)
      .then(response => {
        dispatch({ type: FETCH_DOORS_SUCCESS, payload: response.data });
      })
      .catch(error => console.log(error.response.data));
  };
};