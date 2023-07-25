import { useEffect } from "react";
import { CardCountry } from "./CardCountry";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getCountryByName, searchedQueary,  } from "../../store/";

import styles from "./CountriesList.module.css";

export const CountriesList = () => {
  const dispatch = useDispatch();
  const { countries, currentPage, totalPages, queryParam } = useSelector(
    (state) => state.countries
  );

  
  const startIndex = (currentPage - 1) * 8;

  useEffect(() => {
    if (queryParam === "") {
      dispatch(getCountries(currentPage));
    }
    dispatch(getCountryByName(queryParam, currentPage))
  }, [dispatch, currentPage, queryParam, totalPages]);

  // useEffect(() => {
  
  // }, [])
  

  // const filteredCountries = queryParam
  //   ? countries.filter((country) =>
  //       country.name.toLowerCase().includes(queryParam.toLowerCase())
  //     )
  //   : countries;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(getCountries(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(getCountries(currentPage + 1));
    }
  };
  
  // const handleCountryClick = (id) => {
  //   dispatch(getCountryById(id));
  //   // console.log(id)
  // };

  return (
    <>
      <section className={styles.cardListContent}>
        <ul className={styles.cardList}>
          {countries.slice(startIndex, startIndex + 8).map((item) => (
            <CardCountry
              key={item.id}
              id={item.id}
              flag={item.flag_image_url}
              name={item.name}
              continent={item.continent}
              // onClick={() => handleCountryClick(item.id)}
            />
          ))}
        </ul>
      </section>

      <div className={styles.pagesBtn}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};
