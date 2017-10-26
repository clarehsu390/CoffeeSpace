import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = ({ currentUser }) => ({
    currentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => (dispatch(logout()))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);