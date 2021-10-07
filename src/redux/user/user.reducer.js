import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    userData: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_USER_DATA:
            return {
                ...state,
                userData: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;