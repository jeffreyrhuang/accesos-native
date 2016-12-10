import {
  UPDATE_DIAGNOSTIC
} from '../actions/types';

const INITIAL_STATE = {
  diag1: {
    value: '',
    isFilled: false
  },
  diag2: {
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
    default:
      return state;
  }
};
