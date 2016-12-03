import { combineReducers } from 'redux';
import DoorForm from './DoorFormReducer';
import DoorsReducer from './DoorsReducer';

export default combineReducers({
  doorForm: DoorForm,
  doors: DoorsReducer
});
