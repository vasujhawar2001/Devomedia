import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import authReducer from "./state"
import { authSlice } from './state';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persit/lib/storage";
import {PersistGate} from "redux-persist/integeration/react";

const persistConfig = {key: "root", storage, version:1};
const persistReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer:persistReducer,
  middleware:(getDefaultMidddleware)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
