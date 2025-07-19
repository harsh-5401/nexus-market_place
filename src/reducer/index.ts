import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeslice";
import userReducer from "../slices/userSlice";

const rootReducer = combineReducers({
    theme: themeReducer,
    users: userReducer
});

export type RootState = ReturnType<typeof rootReducer>; // Define and export RootState type

export default rootReducer;