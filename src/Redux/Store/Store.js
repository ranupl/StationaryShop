import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../Reducer/itemReducer';

// Create the Redux store with configureStore
const store = configureStore({
    reducer: itemReducer,
  });
  
  export default store;