import { connect } from 'react-redux';
import Homepage from './homepage';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.currentUser)
});

export default connect(mapStateToProps, null)(Homepage);
