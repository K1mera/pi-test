
import { useDispatch, useSelector } from 'react-redux';
import { getCountryByName, handleSearch } from '../../store';

import { useForm } from '../../hooks/useForm';
import styles from './SearchComponent.module.css'

export const SearchComponent = ({ onSearch }) => {

  const dispatch = useDispatch();
  const { loading, countries  } = useSelector(state => state.countries )

  const { country, onInputChange } = useForm({
    country: ''
  });
 
  const onSubmit = ( event ) => {
    event.preventDefault();
    if ( country.lenght < 1 ) return;
    dispatch( getCountryByName( country ) )
    dispatch( handleSearch() )    
    
  };

  
  return (
    
    <form 
    className={ styles.formCont }
    onSubmit={ onSubmit }>
    <input 
        className={ styles.searchBar }
        type='text'
        placeholder='Search for any country, capital, continet...'
        name='country'
        value={ country }
        onChange={ onInputChange }
      >
        
      </input>
      <div className={ styles.btnContainer}>
        <button 
          type='submit'
          className={ styles.primaryBtn }
          >
          search
        </button>
        <button className={ styles.secondaryBtn } onClick={ handleSearch() }>
          bring me all
        </button>
      </div>
    </form>
  
  )
}
