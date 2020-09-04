import { createSlice } from '@reduxjs/toolkit';

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    capital: 0,
  },
  reducers: {
    add: (state, action) => {
      state.capital += action.payload;
    },
  },
});

export const { add } = companySlice.actions;

export const selectCapital = state => state.company.capital;

export default companySlice.reducer;
