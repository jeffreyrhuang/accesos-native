import { Actions } from 'react-native-router-flux';
import {
  UPDATE_DIAGNOSTIC,
  SHOW_VALIDATION_ERRORS,
  VALIDATION_SUCCESS
} from './types';

export const selectModalOption = ({ prop, value, isFilled }) => {
  return {
    type: UPDATE_DIAGNOSTIC,
    payload: { prop, value, isFilled }
  };
};

export const validateSection = (FIELDS) => {
  return dispatch => {
    const errors = validateFields(FIELDS);
    if (errors.length > 0) {
      dispatch({ type: SHOW_VALIDATION_ERRORS, payload: errors });
    } else {
      dispatch({ type: VALIDATION_SUCCESS });
      Actions.diag2();
    }
  };
};

const validateFields = (FIELDS) => {
  const errors = [];
  if (!FIELDS.diag1.value) {
    errors.push({ prop: 'Pregunta1', message: 'no puede estar en blanco' });
  }
  if (!FIELDS.diag2.value) {
    errors.push({ prop: 'Pregunta2', message: 'no puede estar en blanco' });
  }
  return errors;
};
