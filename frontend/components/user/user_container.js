import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { receiveCurrentUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.currentUser),
    currentUser: state.currentUser
});

const mapDispatchtoProps = dispatch => ({
    receiveSingleUser: id => dispatch(receiveCurrentUser(id))
});

export default connect(mapStateToProps, mapDispatchtoProps)(UserProfile);