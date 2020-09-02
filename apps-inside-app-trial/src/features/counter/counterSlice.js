import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    pickedStateName: undefined,
    states: undefined
  },
  reducers: {
    saveStates: (state, action) => {
      state.states = action.payload;
    },
    pickState: (state, action) => {
      state.pickedStateName = action.payload;
    },
  },
});

export const { pickState, saveStates } = counterSlice.actions;

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
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;
export const selectStates = state => state.counter.states;
export const selectPickedState = state => state.counter.pickedStateName ? state.counter.states[state.counter.pickedStateName] : undefined ;
export const selectpickedStateName = state => state.counter.pickedStateName;

export default counterSlice.reducer;
