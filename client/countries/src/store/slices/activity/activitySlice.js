import { createSlice } from '@reduxjs/toolkit';

export const activitySlice = createSlice({
    name: 'activities',
    initialState: {
        activities: [],
        loading: false,


    },
    reducers: {
        startLoading: (state, /* action */ ) => {
            state.loading = true;
        },
        newActivity: (state, action) => {
            state.activities = action.payload
        },
        getAllActivities: ( state, action ) => {
            state.activities = action.payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoading, newActivity, getAllActivities } =  activitySlice.actions;