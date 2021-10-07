import AuthActionTypes from "./auth.types";

const DEFAULT_STATE = {
    isLoggedIn: false,
}

const authReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case AuthActionTypes.SET_LOGGED_IN: {
            return {
                ...state,
                isLoggedIn: action.payload,
            }
        }
        default:
            return state;
    }
}

export default authReducer;