import {
  setCountries,
  startLoadingCountries,
  setCurrentPage,
  countriesByName,
  searchedQueary,
  searchPerformed,
  countriesById,
  cleanSearch,
} from "./countrySlice";
import { countryIns } from "../../../api/countryInstance";

export const getCountries = (page = 1) => {
  return async (dispatch) => {
    dispatch(startLoadingCountries());

    const { data } = await countryIns.get("/all-countries");
    // console.log( data );

    dispatch(setCountries(data));
    dispatch(setCurrentPage(page));
  };
};

export const getCountryByName = (name = "", page = 1) => {
  return async (dispatch) => {
    dispatch(startLoadingCountries());

    const { data } = await countryIns.get(`/countries/name?name=${name}`);
    
    dispatch(countriesByName(data));
    dispatch(searchedQueary(name))
    dispatch(setCurrentPage(page));
  };
};

export const handleSearch = () => {
  return async (dispatch) => {
    dispatch(searchPerformed(true));
    dispatch(searchPerformed(false));
  };
};

export const cleanQueary = () => {
  return async (dispatch) => {
    dispatch(searchedQueary(''))
  }
}

export const resetSearch = () => {
  return async (dispatch) => {
    dispatch(cleanSearch());
  };
};

export const getCountryById = (id) => {
  return async (dispatch) => {
    const { data } = await countryIns.get(`/countries/${id}`);

    dispatch(countriesById(data));
  };
};
