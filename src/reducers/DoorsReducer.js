import FETCH_DOORS_SUCCESS from '../actions/types';

// const INITIAL_STATE = {
//   doors: []
// };

// export default (state = INITIAL_STATE, action) => {
//   console.log(action.payload);
//   switch (action.type) {
//     case FETCH_DOORS_SUCCESS:
//       //return { ...state, doors: action.payload };
//       return Object.assign({}, state, { doors: action.payload });
//     default:
//       return state;
//   }
//};

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_DOORS_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};

