import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://64dc880ae64a8525a0f6a44c.mockapi.io/contacts';

// запит
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// додавання
export const addTask = createAsyncThunk(
    "contacts/addContacts",
    async (contactNew, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { contactNew });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );


//   видалення
export const deleteContact = createAsyncThunk(
    "contacts/deleteContacts",
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );