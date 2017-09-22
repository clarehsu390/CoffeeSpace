import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const currentUserReducer = (
    state = null, action
) => {
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
        const user = action.user;
        return user;
    
        default:
        return state;
    }

};

export default currentUserReducer;
