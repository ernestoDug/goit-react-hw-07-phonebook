import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const contactsInitialState = {
  items: [
    { id: 'id-4', name: 'John Lennon', number: '09-10-19-40' },
    { id: 'id-3', name: 'Paul McCartney', number: '18-07-19-42' },
    { id: 'id-1', name: 'George Harrison', number: '25-02-19-43' },
    { id: 'id-2', name: 'Ringo Starr', number: '07-07-19-40' },
  ],
  isLoading: false,
  error: null,
};
// очикування
const pendinger = state => {
  state.isLoading = true;
};
// обломщик
const rejecter = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: pendinger,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected]: rejecter,

    [addContact.pending]: pendinger,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      // return [...state.items, action.payload];
      state.items.push(payload);
    },
    [addContact.rejected]: rejecter,

    [deleteContact.pending]: pendinger,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: rejecter,
  },
});

export const contactsReducer = contactsSlice.reducer;
