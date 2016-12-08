import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DiagnosticFormReducer from './DiagnosticFormReducer';
import DoorForm from './DoorFormReducer';
import DoorsReducer from './DoorsReducer';

export default combineReducers({
  auth: AuthReducer,
  diagnosticForm: DiagnosticFormReducer,
  doorForm: DoorForm,
  doors: DoorsReducer
});
