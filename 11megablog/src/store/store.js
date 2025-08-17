import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authslice.js';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;// This is the store configuration for the application.
// It uses Redux Toolkit to create a store instance.
// You can add reducers and middleware as needed in the future.