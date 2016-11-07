export default (state = null, action) => {
  console.log(action);

  switch (action.type) {
    case 'select_orientation':
      return action.payload;
    default:
      return state;
  }
};