import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.currentUser),
    errors: state.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
    const formType = location.pathname.slice(1);
    const processForm = (formType === 'login') ? login : signup;
    return {
        processForm: user => dispatch(processForm(user)),
        clearErrors: () => dispatch(clearErrors()),
        formType
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);