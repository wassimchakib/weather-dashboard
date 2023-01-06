import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import searchbarReducer from './searchbar/searchbarSlice';

const store = configureStore({
  middleware: [logger, thunk],
  reducer: {
    city: searchbarReducer,
  },
});

export default store;
