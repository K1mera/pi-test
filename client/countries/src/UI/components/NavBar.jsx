import { useDispatch, useSelector } from "react-redux";
import { getCountryByName, handleSearch } from "../../store";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useForm } from "../../hooks/useForm";

import styles from "./NavBar.module.css";
export const NavBar = () => {

  

   const dispatch = useDispatch();
   const { loading, countries } = useSelector((state) => state.countries);

   const { country, onInputChange, onResetForm } = useForm({
     country: "",
   });

   const onSubmit = (event) => {
     event.preventDefault();
     if (country.lenght > 1) return;
     
     dispatch(getCountryByName(country));
     dispatch(handleSearch());
     onResetForm()
     
    
   };



  return (
    <nav className={styles.navBar}>
      <div className={styles.navElements}>
        <Link to="/home">HOME</Link>
        <form className={styles.formCont} onSubmit={onSubmit}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search..."
            name="country"
            value={country}
            onChange={onInputChange}
          ></input>
        </form>
      </div>
      <div className={styles.navElements}>
        <NavLink to="/about">ABOUT ME</NavLink>
        <NavLink to="/activities">ACTIVITIES</NavLink>
      </div>
    </nav>
  );
};
