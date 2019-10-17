import { createSelector } from "reselect";
const selectAuth = state => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuth],
  auth => auth.currentUser
);
export const selectAuthIsLoading = createSelector(
  [selectAuth],
  auth => auth.loading
);

export const selectAuthErrors = createSelector(
  [selectAuth],
  auth => auth.authError
);
