import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from './messagesSlice'; // Update import

const store = configureStore({
  reducer: {
    messages: messagesSlice, // Update state slice name
  },
});

export default store;
