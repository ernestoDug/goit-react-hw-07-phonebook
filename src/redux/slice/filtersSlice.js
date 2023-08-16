import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    filterContactsAct(state, { payload }) {
      return (state = payload);
    },
  },
});

export const filtersReduser = filtersSlice.reducer