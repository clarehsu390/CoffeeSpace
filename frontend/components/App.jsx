import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom'
import SessionFormContainer from './session_form/session_form_container';
const App = () => (
    <div>
        <Switch>
        <Route path="/login" component={SessionFormContainer}/>
        <Route path="/signup" component={SessionFormContainer}/>
        </Switch>
    </div>
);

export default App;