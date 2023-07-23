import styles from './ActivityForm.module.css'

export const ActivityForm = () => {
  return (
    <>
      <form action="">
        <div className={ styles.container }>
          <label>Activity name</label>
          <input type="text" />
          <label>Difficulty</label>
          <input type="text" />
          <label>Duration</label>
          <input type="text" />
          <label>Season</label>
          <input type="text" />
          <label>Country</label>
          <input type="text" />
        </div>
        <button>create</button>
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
