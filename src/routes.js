import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Home from './views/Home';
import Test from './views/Test';

export default (
    <Route exact path='/' component={App}>
        <Route component={Home} />
        <Route path='test' component={Test} />
        <Route path='*' component={Home} />
    </Route>
);