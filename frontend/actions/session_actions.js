import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const login = user => dispatch => {
    return APIUtil.login(user).then(
        currentUser => dispatch(receiveCurrentUser(currentUser))
    );
};

export const signup = user => dispatch => {
    return APIUtil.signup(user).then(
        currentUser => dispatch(receiveCurrentUser(currentUser))
    );
};

export const logout = () => dispatch => {
    return APIUtil.logout().then(
        user => dispatch(receiveCurrentUser(null))
    );
};

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});
