import React from 'react';
import  Home  from './views/Home/Home';
import Test  from './views/Test/Test';
import  Profile  from './views/Profile/Profile';
import  NotFound  from './views/NotFound/NotFound';
// components imports
import { Route, Switch, Redirect } from 'react-router-dom';
import HeaderBox from "./components/HeaderBox/HeaderBox";

// This exports the different routes that will be used on the page
export const Routes = () => {
    return (
        <div>
            <HeaderBox />
            <hr></hr>
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/Test" component={Test} />
                <Route exact path="/Profile/:profileId" component={ Profile } />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}