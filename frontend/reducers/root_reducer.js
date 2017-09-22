import { combineReducers } from 'redux';
import errorsReducer from './error_reducer';
import currentUserReducer from './session_reducer';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    errors: errorsReducer
});

export default rootReducer;