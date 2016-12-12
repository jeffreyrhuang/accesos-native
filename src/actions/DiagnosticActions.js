import _ from 'lodash';
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

export const validateSection = ({ page1 }) => {
  return dispatch => {
    const errors = validateErrors({ page1 });
    if (errors.length > 0) {
      dispatch({ type: SHOW_VALIDATION_ERRORS, payload: errors });
    } else {
      dispatch({ type: VALIDATION_SUCCESS });
      Actions.diag2();
    }
  };
};

const validateErrors = (page1) => {
  const target = _.get(page1, ['page1', 'diag1', 'isFilled']);
  const errors = [];
  if (!target) {
    errors.push({ prop: 'Pregunta1', message: 'no puede estar en blanco' });
  }
  if (!_.get(page1, ['page1', 'diag2', 'isFilled'])) {
    errors.push({ prop: 'Pregunta2', message: 'no puede estar en blanco' });
  }
  return errors;
};

