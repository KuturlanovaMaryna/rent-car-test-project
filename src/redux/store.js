import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import carsSlice from './cars/cars.slice';
import favoritesSlice from './favorite.slice';

const PersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};
const PersistedReducer = persistReducer(PersistConfig, favoritesSlice);

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    favorites: PersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
