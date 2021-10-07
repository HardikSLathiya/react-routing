import './App.css';

import {Redirect, Route} from 'react-router-dom';
import React from "react";

import Login from "./components/login/login.component";
import ErrorPages from "./pages/error-pages/error-pages.component";
import HomePage from "./components/home-page/home-page.component";
import Configuration from "./components/configuration/configuration.components";
import Features from "./components/features/features.component";
import ProtectedRoute from "./route-protectors/protected-route/protected-route.component";
import LoginRoute from "./route-protectors/login-route/login-route.component";
import RouteSwitch from "./route-protectors/custom-switch/route-switch.component";


const RootRoute = () => {
    return (
        <RouteSwitch>
            {/* Login Page */}
            <LoginRoute exact path='/login' component={Login}/>

            {/* Default Routing */}
            <ProtectedRoute exact path='/'>
                <Redirect to="home"/>
            </ProtectedRoute>

            {/* Feature Pages */}
            <ProtectedRoute exact path='/home'
                            data={{url: 'default'}}
                            component={HomePage}
            />
            <ProtectedRoute exact path='/configuration'
                            data={{url: '/configuration'}}
                            component={Configuration}
            />
            <ProtectedRoute path='/features'
                            data={{url: '/features'}}
                            component={Features}
            />

            {/* Error Pages */}
            <Route path='/error' component={ErrorPages}/>
        </RouteSwitch>
    );
}

export default RootRoute;
