import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import './stylesheets/App.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import routes from './routes';
import { Router, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    < Router history={BrowserRouter} routes={routes} />,
    document.querySelector('#app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
