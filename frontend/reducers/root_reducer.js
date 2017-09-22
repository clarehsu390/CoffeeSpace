import { combineReducers } from 'redux';
import errorReducer from './errors_reducer';
import currentUserReducer from './session_reducer';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    error: errorReducer
});

export default rootReducer;