export const selectOrientation = (side) => {
  return {
    type: 'select_orientation',
    payload: side
  };
};