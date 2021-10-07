import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Error404 from "./error-404.component";
import Error403 from "./error-403.component";
import Error500 from "./error-500.component";

const ErrorPages = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/error/404" component={Error404}/>
                <Route exact path="/error/403" component={Error403}/>
                <Route exact path="/error/500" component={Error500}/>
                <Redirect to="/error/404"></Redirect>
            </Switch>
        </Router>
    );
};

export default ErrorPages;

