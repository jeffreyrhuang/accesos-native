import {
  ORIENTATION_CHOSEN,
  PUERTA_ABRE_SELECTED
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