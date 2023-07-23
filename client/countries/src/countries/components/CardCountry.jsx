import {Link} from 'react-router-dom'
import styles from './CardCountry.module.css'

export const CardCountry = ({ id, flag, name, continent }) => {


  return (
    <div className={ styles.singleCard } key={ id } >
        <div className={ styles.imgContainer }>
        <img src={ flag } alt={ name } />
        </div>
        <Link to={`${id}`}>
        <h1>{ name }</h1>
        </Link>
        <h3>{ continent }</h3>
    </div>
  )
}
