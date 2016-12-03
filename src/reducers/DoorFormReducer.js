import {
  DOOR_UPDATE,
  DOOR_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  orientation: '',
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
    case DOOR_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
