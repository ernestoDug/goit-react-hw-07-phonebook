import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-4', name: 'John Lennon', number: '09-10-19-40' },
  { id: 'id-3', name: 'Paul McCartney', number: '18-07-19-42' },
  { id: 'id-1', name: 'George Harrison', number: '25-02-19-43' },
  { id: 'id-2', name: 'Ringo Starr', number: '07-07-19-40' },
];

//
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    // додаватор
    addContactsAct: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    // видалятор
    deleteContactsAct(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});
// console.log(contactsSlice.actions);

export const { addContactsAct, deleteContactsAct } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
