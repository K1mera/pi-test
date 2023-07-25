import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../store/slices/country/thunks";
import styles from "./ActivityForm.module.css";
import { useForm } from "../../hooks/useForm";
import { addActivity } from "../../store";

export const ActivityForm = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);
  const { activities } = useSelector((state) => state.activities);

  const {
    name,
    difficulty,
    duration_hours,
    season,
    countryId,
    formState,
    onInputChange,
  } = useForm({
    name: "",
    difficulty: 1,
    duration_hours: 0,
    season: "",
    countryId: "",
  });

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addActivity(formState));
    
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={styles.container}>
          <label>Activity name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
          />
          <label>Difficulty</label>
          <input
            type="range"
            name="difficulty"
            value={difficulty}
            onChange={onInputChange}
            min="1"
            max="5"
          />
          <label>duration_hours</label>
          <input
            type="number"
            name="duration_hours"
            value={duration_hours}
            onChange={onInputChange}
          />
          <label>Season</label>
          <select
            type="text"
            name="season"
            value={season}
            onChange={onInputChange}
          >
            <option value={""}>-select one-</option>
            <option value={"winter"}>winter</option>
            <option value={"spring"}>spring</option>
            <option value={"summer"}>summer</option>
            <option value={"autumn"}>autumn</option>
          </select>
          <label>Country</label>
          <select name="countryId" value={countryId} onChange={onInputChange}>
            <option>-select one-</option>
            {countries.map((list) => (
              <option key={list.id} value={list.id}>
                {list.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">create</button>
        </div>
      </form>
    </>
  );
};

// Nombre.
// Dificultad.
// Duración.
// Temporada.
// Posibilidad de seleccionar/agregar varios países en simultáneo.
// Botón para crear la actividad turística.

