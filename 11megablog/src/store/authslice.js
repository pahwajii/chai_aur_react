import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userdata : null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        login : (state, action) => {
            state.status = true; // Set status to true when user logs in
            state.userdata = action.payload.userdata; // Store user data in userdata
        },
        logout: (state) => {
            state.status = false; // Set status to false when user logs out
            state.userdata = null; // Clear user data
        },
        post: (state, action) => {
            state.post = action.payload.post; // Store post data in post
        },
    }
})

export const { login, logout } = authSlice.actions; // Export actions for use in components
export default authSlice.reducer; // Export the reducer to be used in the store