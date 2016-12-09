import { DIAGNOSTIC_UPDATE } from './types';

export const selectModalOption = ({ prop, value, isFilled }) => {
  return {
    type: DIAGNOSTIC_UPDATE,
    payload: { prop, value, isFilled }
  };
};
