import { configureStore } from '@reduxjs/toolkit';

// для ігнору
import {
  FLUSH,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  REHYDRATE,
  PAUSE,
} from 'redux-persist';
// для л/с
import { persistedReducer } from './persistedReducer';

export const store = configureStore({
  devTools: true,
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
