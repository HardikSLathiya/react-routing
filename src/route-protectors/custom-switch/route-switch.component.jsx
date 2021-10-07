import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";

const RouteSwitch = (props) => {
    const {children} = props;
    return (
        <Switch {...props}>
            {children}
            {/* if noting matched then redirect to 404 */}
            <Route>
                <Redirect to="/error/404"></Redirect>
            </Route>
        </Switch>
    );
}

export default RouteSwitch;