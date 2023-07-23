import { setCountries, startLoadingCountries, setCurrentPage, countriesByName, searchedQueary, searchPerformed, countriesById } from "./countrySlice"
import { countryIns } from '../../../api/countryInstance'


export const getCountries = ( page = 0 ) => {
    return async ( dispatch ) => {
        dispatch( startLoadingCountries() );

        const { data } =  await countryIns.get('/all-countries')
        // console.log( data );

        dispatch(setCountries(data));

        dispatch(setCurrentPage(page));
    }
}

export const getCountryByName = ( name = '' ) => {
    return async ( dispatch ) => {
        dispatch( startLoadingCountries() );

        const { data } = await countryIns.get(`/countries/name?name=${ name }`);

        dispatch( countriesByName(data) );
        dispatch( setCurrentPage(1));
        dispatch( searchedQueary(name) );
        
    }
}

export const handleSearch = ( ) => {
    return async (dispatch) => {
        dispatch( searchPerformed(true) )
        dispatch( searchPerformed(false) )
    }
  };

  export const getCountryById = ( id ) => {
    return async (dispatch) => {

        const { data } = await countryIns.get(`/countries/${ id }`);

        dispatch( countriesById( data ) )
        
    }
  }