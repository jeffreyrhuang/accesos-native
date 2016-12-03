import axios from 'axios';
import { Actions } from 'react-native-router-flux';
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
    axios.post(`${API_URL}/doors`, { orientation, puerta_abre, cerradura, cierrapuertas, segmentar })
      .then(() => {
        dispatch({ type: DOOR_CREATE });
        Actions.doorList({ type: 'reset' });
      })
      .catch(error => console.log(error));
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
