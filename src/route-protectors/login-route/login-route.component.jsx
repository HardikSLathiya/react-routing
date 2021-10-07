import React from "react";
import {Route} from "react-router-dom";
import {store} from "../../redux/store";
import {selectIsLoggedIn} from "../../redux/auth/auth.selector";

const LoginRoute = ({component: Component, ...otherProps}) => {

    const handleRender = (props) => {
        const state = store.getState();
        const isLoggedIn = selectIsLoggedIn(state);
        // check if already logged in
        if (!isLoggedIn) {
            // render component
            return <Component {...props}/>
        } else {
            // redirect to home page
            const {history} = props;
            history.push('/');
        }
    };

    return (<Route {...otherProps} render={handleRender}/>);
}

export default LoginRoute;