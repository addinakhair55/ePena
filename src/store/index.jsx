import { configureStore } from '@reduxjs/toolkit';
import pendaftaranReducer from '../pendaftaranSlice';

const store = configureStore({
  reducer: {
    pendaftaran: pendaftaranReducer,
  },
});

export default store;
