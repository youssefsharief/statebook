import { createSlice } from '@reduxjs/toolkit';

export const appDataSlice = createSlice({
  name: 'appData',
  initialState: {
    pickedKey: undefined,
    items: undefined
  },
  reducers: {
    saveAppDataItems: (state, action) => {
      state.items = action.payload;
    },
    pickDataItemKey: (state, action) => {
      state.pickedKey = action.payload;
    },
  },
});

export const { pickDataItemKey, saveAppDataItems } = appDataSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.appData.value)`
export const selectAppDataItems = state => state.appData.items;
export const selectPickedAppDataItem = state => state.appData.pickedKey ? state.appData.items[state.appData.pickedKey] : undefined ;

export default appDataSlice.reducer;
