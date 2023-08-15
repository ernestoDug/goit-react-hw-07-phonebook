// для лок ст
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { contactsReducer } from './slice/contactsSlice';
import { filtersReducer } from './slice/filtersSlice';

const persistConfig = {
  key: 'root',
  storage,
  // Нео для л/с
  whitelist: ['contacts'],
};
// поєднувач редюсерів
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
export const persistedReducer = persistReducer(persistConfig, rootReducer);
