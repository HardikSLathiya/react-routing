import {Link, Redirect, Route} from "react-router-dom";
import Feature1 from "./feature-1/feature1.component";
import Feature2 from "./feature-2/feature2.component";
import ProtectedRoute from "../../route-protectors/protected-route/protected-route.component";
import React from "react";
import RouteSwitch from "../../route-protectors/custom-switch/route-switch.component";

const Features = ({match}) => {
    return (
        <div>
            <h4>Features Page</h4>
            <div>
                <div className="menubar">
                    <Link className="menu-item" to={`${match.path}/feature1`}>Feature 1</Link>
                    <Link className="menu-item" to={`${match.path}/feature2`}>Feature 2</Link>
                </div>

                <Route path="/features/" strict>
                    <RouteSwitch>
                        <ProtectedRoute exact path={`${match.path}/feature1`}
                                        data={{url: '/features/feature1'}}
                                        component={Feature1}
                        />
                        <ProtectedRoute exact path={`${match.path}/feature2`}
                                        data={{url: '/features/feature2'}}
                                        component={Feature2}
                        />

                        {/* if noting matched then redirect to 404 */}
                        <Route>
                            <Redirect to="/error/404"></Redirect>
                        </Route>
                    </RouteSwitch>
                </Route>
            </div>
        </div>
    );
};

export default Features;

