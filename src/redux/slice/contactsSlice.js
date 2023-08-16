import { createSlice, nanoid } from '@reduxjs/toolkit';
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
const rejecter = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: 
      {
        contactsInitialState
      },
      extraReducers: {
        [fetchContacts.pending]: pendinger,
        [fetchContacts.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        },
        [fetchContacts.rejected]: rejecter,
        [fetchContacts.pending]: pendinger,
        [addContact.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          return [...state, action.payload];
        },
        // prepare(name, number) {
        //           return {
        //             payload: {
        //               name,
        //               number,
        //               id: nanoid(),
        //             },
        [addContact.rejected]: rejecter,
        [deleteContact.pending]: pendinger,
        [deleteContact.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
return  state.items.filter(contact => contact.id !== action.payload);;
        },
        [deleteContact.rejected]: rejecter,
              },
    });

//   reducers: {
//     // додаватор
//     addContactsAct: {
//       reducer(state, action) {
//         return [...state, action.payload];
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     // видалятор
//     deleteContactsAct(state, { payload }) {
//       return state.filter(contact => contact.id !== payload);
//     },
//   },
// });
// // console.log(contactsSlice.actions);

export const  contactsReducer = contactsSlice.reducer