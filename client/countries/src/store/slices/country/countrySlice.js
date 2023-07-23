import { createSlice } from '@reduxjs/toolkit';

export const countrySlice = createSlice({
    name: 'countries',
    initialState: {
        currentPage: 1,
        countries: [],
        country: [],
        loading: false,
        totalPages: 1,
        queryParam: '',
        searched: false,
        },
    reducers: {
        startLoadingCountries: (state, /* action */ ) => {
            state.loading = true;
        },
        setCountries: ( state, action ) => {
            state.loading = false;
            state.countries = action.payload;
            state.totalPages = Math.ceil(action.payload.length / 8)
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        countriesByName: ( state, action ) => {
            state.loading = true;
            state.countries = action.payload;
            // console.log(action.payload);
        },
        countriesById: ( state, action ) => {
            state.loading = true;
            state.country = action.payload
            
            
        },
        searchedQueary: ( state, action ) => {
            state.queryParam = action.payload;
        },
        searchPerformed: ( state ) => {
            state.searched = true;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    startLoadingCountries,
    setCountries,
    setCurrentPage,
    countriesByName,
    searchedQueary,
    searchPerformed,
    countriesById, 
    } = countrySlice.actions;