import {
  UPDATE_DIAGNOSTIC,
  UPDATE_INPUT,
  SHOW_VALIDATION_ERRORS,
  VALIDATION_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  errors: [],
  diag1: {
    value: '',
    isFilled: false
  },
  diag2: {
    value: '',
    isFilled: false
  },
  diag3: {
    value: '',
    isFilled: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DIAGNOSTIC:
      let prop = action.payload.prop;
      return {
        ...state, [action.payload.prop]: { ...state.prop, value: action.payload.value, isFilled: action.payload.isFilled }
      };
    case UPDATE_INPUT:
      let prop3 = action.payload.prop;
      return { ...state, [action.payload.prop]: { ...state.prop3, value: action.payload.value } };
    case SHOW_VALIDATION_ERRORS:
      return { ...state, errors: action.payload };
    case VALIDATION_SUCCESS:
      return { ...state, errors: [] };
    default:
      return state;
  }
};
