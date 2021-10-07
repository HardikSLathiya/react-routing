import {createSelector} from 'reselect';

const selectAuth = state => state?.auth;

export const selectIsLoggedIn = createSelector(
    [selectAuth],
    auth => auth?.isLoggedIn,
);