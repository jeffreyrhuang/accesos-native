import { DIAGNOSTIC_UPDATE } from './types';

export const selectModalOption = ({ prop, value }) => {
  return {
    type: DIAGNOSTIC_UPDATE,
    payload: { prop, value }
  };
};
