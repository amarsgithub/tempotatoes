import React, { Component } from "react";
import Home from './views/Home';
import Test from './views/Test';
import {BrowserRouter, Route} from 'react-router-dom';
import User from './BackendTempData/userAccounts';

// This app acts as the highest level and displays the different views
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact={true} path='/' render={ () => (
                        <div className = "App">
                            <Home />
                        </div>
                    )}/>
                    <Route exact={true} path='/home' render={ () => (
                        <div className = "App">
                            <Home />
                        </div>
                    )}/>
                    <Route exact={true} path='/test' render = { () => (
                        <div className="App">
                            <Test />
                        </div>
                    )}/>
                    <Route exact={true} path='/{}{}' render = { () => (
                        <div className="App">
                            <Test />
                        </div>
                    )}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;