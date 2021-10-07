import React from "react";
import {Redirect, Route} from "react-router-dom";
import {store} from "../../redux/store";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectIsLoggedIn} from "../../redux/auth/auth.selector";

const ProtectedRoute = ({component: Component, data, ...otherProps}) => {

    const handleRender = (props) => {
        const state = store.getState();
        const userData = selectCurrentUser(state);
        const isLoggedIn = selectIsLoggedIn(state);
        // const {history} = props;

        // check if authenticated
        if (isLoggedIn) {
            // check allowed urls
            if (data?.url && (userData?.allowedUrls?.includes(data.url) || data.url === 'default')) {
                return <Component {...props}/>
            } else {
                // redirect to error page
                return <Redirect to="/error/403"></Redirect>
                // history.push('/error/403');
            }
        } else {
            // redirect to login
            return <Redirect to="/login"></Redirect>
            // history.push('/login');
        }
    };

    return (<Route {...otherProps} render={handleRender}/>);
}

export default ProtectedRoute;