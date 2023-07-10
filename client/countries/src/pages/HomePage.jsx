import React, {useEffect} from 'react'



import img from '/assets/planet-earth-background.png'
import {SearchComponent} from '../countries/components/SearchComponent';
import {CountriesList} from '../countries/components/CountriesList';

export const HomePage = () => {

useEffect(() => {
    document.documentElement.style.backgroundImage = `url(${img})`;
    document.documentElement.style.backgroundRepeat = 'no-repeat';
    document.documentElement.style.backgroundPosition = 'center';
    document.documentElement.style.backgroundSize = '100vh';
    document.documentElement.style.transition = 'all 1s';



    return () => {
    document.documentElement.style.backgroundImage = '';
    document.documentElement.style.backgroundSize = '';
    document.documentElement.style.backgroundRepeat = '';
    document.documentElement.style.backgroundPosition = '';
    document.documentElement.style.transition = '';
    };
  }, []);
  

  return (
    <> 
      <SearchComponent/>
      {/* <CountriesList/> */}
    </>
  )
}
