import React from 'react'
import { NavBar } from './NavBar'

import styles from './LayoutBack.module.css'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import {HomePage} from '../../pages/HomePage'
import {AboutPage} from '../../pages/AboutPage'



export const LayoutBack = () => {
 const location = useLocation(

 )

  return (
    <div className={  location.pathname === '/home' ? styles.layoutHome : styles.layoutAbout}>
        
            <NavBar/>
       
        <div className={ location.pathname === '/home' ? styles.content : styles.contentAbout }>
            {/* !!Component */}
            <Routes>
              <Route path='/home' element={ <HomePage /> } />
              <Route path='/about' element={ <AboutPage /> } />

              <Route path='/*' element={ <Navigate to='/home' /> }/>
            </Routes>
        </div>
    </div>
  )
}
