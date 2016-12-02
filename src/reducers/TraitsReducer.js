import {
  DOOR_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  puerta_abre: '',
  cerradura: '',
  cierrapuertas: false,
  segmentar: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case DOOR_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
