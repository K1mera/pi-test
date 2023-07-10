import styles from './CardCountry.module.css'

export const CardCountry = ({ id, flag, name, continent }) => {
  return (
    <div className={ styles.singleCard } key={ id }>
        <div className={ styles.imgContainer }>
        <img src={ flag } alt={ name } />
        </div>
        <h1>{ name }</h1>
        <h3>{ continent }</h3>
    </div>
  )
}
