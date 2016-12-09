import {
  DIAGNOSTIC_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  diag1: 'seleccionar'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DIAGNOSTIC_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
