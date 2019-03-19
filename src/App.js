import React, { Component } from "react";
import Home from './views/Home';
import Test from './views/Test';
import {BrowserRouter, Route} from 'react-router-dom';

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
                    <Route exact={true} path='/test' render = { () => (
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