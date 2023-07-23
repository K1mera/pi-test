import { useEffect } from 'react'



import img from '/assets/planet-earth-background.png'
import { SearchComponent, CountriesList } from '../countries/components';
import { useSelector } from 'react-redux';


export const HomePage = () => {

  // const dispatch = useDispatch();
  const { searched } = useSelector( state => state.countries );

  

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
      {!searched ? (
        <>
        <SearchComponent />
        </>
      ) : (
        <CountriesList />
      )}
    </>
  )
}
