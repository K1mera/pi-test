import { configureStore } from "@reduxjs/toolkit";
import { countrySlice } from "./slices/country/countrySlice";

export const store = configureStore({
    reducer: {
        countries: countrySlice.reducer,
    },

}) 