import axios from 'axios';
import {
  ORIENTATION_CHOSEN,
  PUERTA_ABRE_SELECTED,
  CERRADURA_SELECTED,
  CIERRAPUERTAS,
  SEGMENTAR,
  FETCH_DOORS_SUCCESS
} from './types';

export const orientationChosen = (side) => {
  return {
    type: ORIENTATION_CHOSEN,
    payload: side
  };
};

export const puertaAbreSelected = (value) => {
  return {
    type: PUERTA_ABRE_SELECTED,
    payload: value
  };
};

export const cerraduraSelected = (value) => {
  return {
    type: CERRADURA_SELECTED,
    payload: value
  };
};

export const cierraChanged = (boolean) => {
  return {
    type: CIERRAPUERTAS,
    payload: boolean
  };
};

export const segmentarChanged = (boolean) => {
  return {
    type: SEGMENTAR,
    payload: boolean
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
