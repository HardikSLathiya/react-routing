import AuthActionTypes from "./auth.types";

const setLoggedIn = (isLoggedIn) => {
    return {
        type: AuthActionTypes.SET_LOGGED_IN,
        payload: isLoggedIn,
    }
}

export default setLoggedIn;