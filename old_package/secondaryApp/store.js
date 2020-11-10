import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './companySlice';

export const getStore = () => configureStore({
  reducer: {
    company: companyReducer,
  },
});
