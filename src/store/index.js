import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

// configuration Redux Persist
const persistConfig = {
  key: 'root',
  storage: storage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({ serializableCheck: false }), 
    thunk
  ]
});

// Initialize Redux Persist
export const persistor = persistStore(store);