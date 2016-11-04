import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

import Layout from './pages/Layout';
import About from './pages/About';
import Contact from './pages/Contact';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
        </Route>
    </Router>    
),document.getElementById('app'))
