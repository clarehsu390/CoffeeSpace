import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import HomepageContainer from './homepage/homepage_container';
import NavBarContainer from './navbar/navbar_container';
import ShopMap from './shop/shop_map';
import UserProfileContainer from './user/user_container';
import ShopDetails from'./shop/shop_details';
const App = () => (
    <div>
        <Route path="/" component={NavBarContainer}/>
        <Switch>
        <Route exact path="/" component={HomepageContainer} />
        <ProtectedRoute exact path="/" component={ShopMap}/>
        </Switch>
        <Switch>
        <AuthRoute path="/login" component={SessionFormContainer}/>
        <AuthRoute path="/signup" component={SessionFormContainer}/>
        </Switch>
        <ProtectedRoute path="/:userId" component={UserProfileContainer}/>
        <ProtectedRoute path="/shop/:shopId/" component={ShopDetails}/>
    </div>
);

export default App;
