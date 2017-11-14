import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import HomepageContainer from './homepage/homepage_container';
import NavBarContainer from './navbar/navbar_container';
import ShopMap from './shop/shop_map';
import UserProfileContainer from './user/user_container';
const App = () => (
    <div>
        <Route exact path="/" component={HomepageContainer} />
        <Route path="/" component={NavBarContainer}/>
        <ProtectedRoute exact path="/" component={ShopMap}/>

        <Switch>
        <AuthRoute path="/login" component={SessionFormContainer}/>
        <AuthRoute path="/signup" component={SessionFormContainer}/>
        </Switch>
        <ProtectedRoute path="/:userId" component={UserProfileContainer}/>
    </div>
);

export default App;
