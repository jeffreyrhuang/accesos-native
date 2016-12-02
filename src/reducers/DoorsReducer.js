import { FETCH_DOORS_SUCCESS } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DOORS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

