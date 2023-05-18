import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6464714f043c103502b99774.mockapi.io';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios('/users');
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );