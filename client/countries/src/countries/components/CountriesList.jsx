
import axios from 'axios'
import { useEffect, useState } from 'react';
import {CardCountry} from './CardCountry';

import styles from './CountriesList.module.css'


export const CountriesList = () => {

    const [country, setCountry] = useState([])
    const [startIndex, setStartIndex] = useState({
        page: 1,
        size: 0
    });
    

     useEffect( () => {
    axios.get('http://localhost:3001/all-countries')
      .then(response => {
        setCountry( response.data.slice(0, 26) )
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleNextPage = () => {
    const nextPage = startIndex.page + 1;
    const sizing = startIndex.size + 8;

    setStartIndex( {
        page: nextPage,
        size: sizing
    } );
  };

  const handlePreviousPage = () => {
    const nextPage = startIndex.page - 1;
    const sizing = startIndex.size - 8;

    setStartIndex( {
        page: nextPage,
        size: sizing
    } );
  };

  const pagination = country.slice(startIndex.size, startIndex.size + 8 );


 const lastPage = () => {
    const totalItems = country.length;
    const totalPages = Math.ceil( totalItems / 8 )
    
    
    return startIndex.page === totalPages 
    
 }



  return (
    <>
    <ul className={ styles.cardList }>
        {
            pagination.map( item => 
            <CardCountry 
                key={ item.id }
                flag={ item.flag_image_url }
                name={ item.name }
                continent={ item.continent } />
            )
        }
    </ul>
    <div className={ styles.pagesBtn }>
        <button 
            onClick={ handlePreviousPage }
            disabled={ startIndex.page === 1 ? true : false}
        >Previous</button>
        <button 
            onClick={ handleNextPage }
            disabled={  lastPage() }
        >Next</button>
    </div>

    
    </>
  )
}
