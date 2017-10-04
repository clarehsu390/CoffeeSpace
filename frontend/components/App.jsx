import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom'
import SessionFormContainer from './session_form/session_form_container';
const App = () => (
    <div>
        <Route path="/login" component={SessionFormContainer}/>
    </div>
);

export default App;