import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DoorForm from './DoorFormReducer';
import DoorsReducer from './DoorsReducer';

export default combineReducers({
  auth: AuthReducer,
  doorForm: DoorForm,
  doors: DoorsReducer
});
