export const selectAllUsers = state => state.users.users;
export const selectError = state => state.users.error;
export const selectLoading = state => state.users.isLoading;
export const selectFilter = state => state.users.filter;
export const selectFilteredUsers = state => {
  if (state.users.filter === 'follow') {
    return state.users.users.filter(user => !user.isFollowing);
  } else if (state.users.filter === 'following') {
    return state.users.users.filter(user => !!user.isFollowing);
  } else return state.users.users;
};
