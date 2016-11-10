import {
  ORIENTATION_CHOSEN,
  PUERTA_ABRE_SELECTED,
  CERRADURA_SELECTED,
  SEGMENTAR
} from './types'

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

export const switchChanged = (boolean) => {
  return {
    type: SEGMENTAR,
    payload: boolean
  };
};