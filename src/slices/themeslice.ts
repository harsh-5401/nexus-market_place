import { createSlice } from "@reduxjs/toolkit";

// Set dark mode as default, but still respect user's previous preference if available
const getInitialDarkMode = () => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference !== null) {
        return storedPreference === "true";
    }
    // Default to dark mode if no preference is stored
    return true;
};

const initialState = {
    darkMode: getInitialDarkMode(),
};

const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem("darkMode", state.darkMode.toString());
            console.log("darkMode", state.darkMode);
        },
    }
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;