import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

import './index.css'
import {CountriesApp} from './CountriesApp'
import { BrowserRouter } from 'react-router-dom' 




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountriesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
