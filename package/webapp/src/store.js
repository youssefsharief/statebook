import { configureStore } from '@reduxjs/toolkit';
import appDataReducer from './features/appData/appDataSlice';

export default configureStore({
  reducer: {
    appData: appDataReducer,
  },
});
