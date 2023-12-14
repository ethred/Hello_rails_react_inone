import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  value: '',
  status: 'busy',
};

// Async thunk for fetching messages
export const createMessages = createAsyncThunk(
  'messages/createMessages',
  async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/messages/random');
      return response.data.message;
    } catch (error) {
      throw new Error('Failed to fetch message');
    }
  }
);

// Create slice with reducers and extraReducers
const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMessages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createMessages.fulfilled, (state, action) => {
        state.status = 'done';
        state.value = action.payload;
      })
      .addCase(createMessages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default messagesSlice.reducer;
