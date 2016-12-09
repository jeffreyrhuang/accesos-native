import {
  DIAGNOSTIC_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  diag1: {
    value: 'seleccionar',
    isFilled: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DIAGNOSTIC_UPDATE:
      console.log(action.payload.prop);
      let prop = action.payload.prop;
      return {
        ...state, [action.payload.prop]: { ...state.prop, value: action.payload.value, isFilled: action.payload.isFilled }
      };
    default:
      return state;
  }
};
