import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

import Layout from './pages/Layout';
import About from './pages/About';
import GraphicIllustrations from './pages/GraphicIllustrations';
import Modeling from './pages/3DModeling'
import Contact from './pages/Contact';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={About}></IndexRoute>
            <Route path='graphic-illustrations' component={GraphicIllustrations}></Route>
            <Route path='3d-modeling' component={Modeling}></Route>
            <Route path='contact' component={Contact}></Route>
        </Route>
    </Router>    
),document.getElementById('app'))
