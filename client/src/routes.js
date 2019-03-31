import React from 'react';
import  Home  from './views/Home/Home';
import Test  from './views/Test/Test';
import Events from './views/Events/Events';
import  Profile  from './views/Profile/Profile';
import  NotFound  from './views/NotFound/NotFound';
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
                <Route path="/Home/:profileId" component={ Profile } />
                <Route exact path="/Events" component={Events} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}