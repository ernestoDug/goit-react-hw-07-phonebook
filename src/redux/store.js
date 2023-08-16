import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice/contactsSlice';
import { filtersReducer } from './slice/filtersSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
