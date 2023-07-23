import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import {getCountryById} from "../../store";
import { useEffect } from "react";
import styles from './SingleCountry.module.css'

export const SingleCountry = () => {

  const dispatch = useDispatch(); 
  const { id } = useParams();


  useEffect(() => {
    dispatch(getCountryById(id));
  }, [id])
  

  const { country } = useSelector(state => state.countries);
  // console.log(SingleCountry);

  return (
    <div className={ styles.container }>
      <section>
        <img src={country.flag_image_url } alt="" />
      </section>
      <section>
        <h6>{country.id}</h6>
        <h1>{country.name}</h1>
        <h3>{country.continent}</h3>
        <ul>
          <li>Capital: {country.capital} </li>
          <li>Subregion: {country.subregion} </li>
          <li>Area: {country.area} </li>
          <li>Population: {country.population} </li>
        </ul>
      </section>
    </div>
  );
};

// ID (Código de tres letras).
// Nombre.
// Imagen de la bandera.
// Continente.
// Capital.
// Subregión (si tiene).
// Área (si tiene).
// Población.
