import { combineReducers } from 'redux';
import OrientationReducer from './OrientationReducer';
import TraitsReducer from './TraitsReducer';

export default combineReducers({
  orientation: OrientationReducer,
  traits: TraitsReducer
});