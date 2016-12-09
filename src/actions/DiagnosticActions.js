import { UPDATE_DIAGNOSTIC } from './types';

export const selectModalOption = ({ prop, value, isFilled }) => {
  return {
    type: UPDATE_DIAGNOSTIC,
    payload: { prop, value, isFilled }
  };
};
