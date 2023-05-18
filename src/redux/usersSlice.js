import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersOperations';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    follow: (state, { payload }) => {
      const selected = state.users.find(user => user.id === payload);
      selected.isFollowing = true;
      selected.followers++;
    },
    unfollow: (state, { payload }) => {
      const selected = state.users.find(user => user.id === payload);
      selected.isFollowing = false;
      selected.followers--;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export default usersSlice.reducer;
export const follow = usersSlice.actions.follow;
export const unfollow = usersSlice.actions.unfollow;

// {[fetchUsers.pending]: state => {
//     state.isLoading = true;
//   },
//   [fetchUsers.fulfilled]: (state, { payload }) => {
//     state.users = payload;
//     state.isLoading = false;
//     state.error = null;
//   },
//   [fetchUsers.rejected]: (state, { payload }) => {
//     state.isLoading = false;
//     state.error = payload;
//   },
