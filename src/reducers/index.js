import { combineReducers } from 'redux';
import OrientationReducer from './OrientationReducer';
import TraitsReducer from './TraitsReducer';
import DoorsReducer from './DoorsReducer';

export default combineReducers({
  orientation: OrientationReducer,
  traits: TraitsReducer,
  doorState: DoorsReducer
});
