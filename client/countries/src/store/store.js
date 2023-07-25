import { configureStore } from "@reduxjs/toolkit";
import { countrySlice } from "./slices/country/countrySlice";
import { activitySlice } from "./slices/activity/activitySlice";

export const store = configureStore({
    reducer: {
        countries: countrySlice.reducer,
        activities: activitySlice.reducer,
    },

}) 