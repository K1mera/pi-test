import React from 'react'
import { NavBar } from './NavBar'

import styles from './LayoutBack.module.css'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage, AboutPage } from '../../pages'
import { SingleCountry } from '../../countries/components'
import {ActivityForm} from '../../activities/pages/ActivityForm'




export const LayoutBack = () => {
 const location = useLocation(

 )

  return (
    <div className={  location.pathname === '/home' ? styles.layoutHome : styles.layoutAbout}>
        
            <NavBar/>
       
        <div className={ location.pathname === '/about' ? styles.contentAbout : styles.content }>
            {/* !!Component */}
            <Routes>
              <Route path='home' element={ <HomePage /> } />
              <Route path='about' element={ <AboutPage /> } />
              <Route path='home/:id' element={ <SingleCountry /> } />
              <Route path='activities' element={ <ActivityForm /> }/>

              <Route path='/*' element={ <Navigate to='/home' /> }/>
            </Routes>
        </div>
    </div>
  )
}
