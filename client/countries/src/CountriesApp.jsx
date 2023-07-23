import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'



import { MainRouter } from './routes/MainRouter'

export const CountriesApp = () => {



  return (
    <Provider store={ store }>
      <MainRouter/> 
    </Provider>
  )
}
