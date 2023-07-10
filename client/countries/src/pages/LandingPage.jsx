
import {Link} from 'react-router-dom'
import styles from '../CountriesApp.module.css'

import planetEarthBackground from '/assets/planet-earth-background.png'

export const LandingPage = () => {
  return (
    <div className={ styles.container }>
      
        <div className={ styles.landingContent }>
            <h3>Welcome to this humble <span className={ styles.piSpan }>PI</span></h3>
            <h1>Be ready to discover the world</h1>
            <Link to='/home'>
            <button>enter</button>
            </Link>
        </div>
        <div className={ styles.landingContentImg }>
          <img className={ styles.imgLanding } src={ planetEarthBackground } alt="" />
        </div>
    </div>
  )
}
