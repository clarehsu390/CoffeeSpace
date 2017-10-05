import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const Auth = ({component: Component, path, loggedIn}) => (
    <Route path={path} render={(props) => (
        !loggedIn? (
            <Component {...props}/>
        ) : ( <Redirect to="/"/>)
            )}/>
);

const mapStateToProps = state => ({
   loggedIn: Boolean(state.currentUser)
});

export const AuthRouter = withRouter(connect(mapStateToProps, null)(Auth));