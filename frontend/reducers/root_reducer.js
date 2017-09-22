import { combineReducers } from 'redux';
import errorReducer from './errors_reducer';

const rootReducer = combineReducers({
    error: errorReducer,
});

export default rootReducer;