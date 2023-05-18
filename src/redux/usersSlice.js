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
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
        }
      )
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
