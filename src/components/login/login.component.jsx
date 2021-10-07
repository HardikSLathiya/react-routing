import {withRouter} from "react-router-dom/cjs/react-router-dom";
import {setCurrentUser} from "../../redux/user/user.actions";
import setLoggedIn from "../../redux/auth/auth.actions";
import {compose} from "redux";
import {connect} from "react-redux";

const Login = ({history, setUserData, setLoggedIn}) => {
    const handleLogin = () => {
        const userData = {
            userName: 'Jhon Doe',
            email: 'jhon.doe@gmail.com',
            allowedUrls: [
                '/features',
                '/features/feature1',
                '/features/feature2',
            ],
        }
        setLoggedIn(true);
        setUserData(userData);
        history.push('/');
    }

    return (
        <div>
            <h4>Login Page</h4>

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setUserData: (user) => dispatch(setCurrentUser(user)),
    setLoggedIn: (isLoggedIn) => dispatch(setLoggedIn(isLoggedIn)),
});

export default compose(
    connect(null, mapDispatchToProps),
    withRouter
)(Login);
