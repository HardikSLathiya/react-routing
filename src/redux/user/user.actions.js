import UserActionTypes from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_USER_DATA,
    payload: user
});