import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    filterContactsAct(state, action) {
      return (state = action.payload);
    },
  },
});

export const filtersReduser = filtersSlice.reducer;
export const { filterContactsAct } = filtersSlice.actions;
