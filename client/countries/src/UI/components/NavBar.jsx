import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import styles from './NavBar.module.css'

export const NavBar = () => {
  return (
    <nav className={ styles.navBar }>
      <div>
        <Link to='/home'>
            HOME
        </Link>
      </div>
      <div className={ styles.navElements }>
        <NavLink to='/about'>
            ABOUT ME
        </NavLink>
        <NavLink>
            ACTIVITIES
        </NavLink>
      </div>

    </nav>
  )
}
