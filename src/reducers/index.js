import { combineReducers } from 'redux';
import OrientationReducer from './OrientationReducer';

export default combineReducers({
  orientation: OrientationReducer
});