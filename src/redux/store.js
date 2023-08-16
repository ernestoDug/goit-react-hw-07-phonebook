import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice/contactsSlice';
import { filtersReduser } from './slice/filtersSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filters: filtersReduser,
  },
});
