import './App.css';

import {Link, withRouter} from 'react-router-dom';
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";

import {setCurrentUser} from "./redux/user/user.actions";
import setLoggedIn from "./redux/auth/auth.actions";
import RootRoute from "./RootRoute";


class App extends React.Component {
    render() {
        const {setUserData, setLoggedIn, history} = this.props;

        return (
            <div>
                <div className="menubar">
                    <Link className="menu-item" to='/'>Home Page</Link>
                    <Link className="menu-item" to='/configuration'>Configuration Page</Link>
                    <Link className="menu-item" to='/features'>Features Page</Link>
                    <button className="menu-item" onClick={() => {
                        history.push('/');
                        setLoggedIn(false);
                        setUserData(null);
                    }}>Log Out
                    </button>
                </div>

                {/* Root Router */}
                <RootRoute></RootRoute>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setUserData: (user) => dispatch(setCurrentUser(user)),
    setLoggedIn: (isLoggedIn) => dispatch(setLoggedIn(isLoggedIn)),
});

export default compose(
    connect(null, mapDispatchToProps),
    withRouter,
)(App);
