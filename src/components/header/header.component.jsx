import './App.css';

import {Link, withRouter} from 'react-router-dom';
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";

import {setCurrentUser} from "../../redux/user/user.actions";
import setLoggedIn from "../../redux/auth/auth.actions";

const Header = ({setUserData, setLoggedIn, history}) => {
    const onClickLogout = () => {
        history.push('/');
        setLoggedIn(false);
        setUserData(null);
    }

    return (
        <div>
            <div className="menubar">
                <Link className="menu-item" to='/'>Home Page</Link>
                <Link className="menu-item" to='/configuration'>Configuration Page</Link>
                <Link className="menu-item" to='/features'>Features Page</Link>
                <button className="menu-item" onClick={onClickLogout}>Log Out</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setUserData: (user) => dispatch(setCurrentUser(user)),
    setLoggedIn: (isLoggedIn) => dispatch(setLoggedIn(isLoggedIn)),
});

export default compose(
    connect(null, mapDispatchToProps),
    withRouter,
)(Header);
