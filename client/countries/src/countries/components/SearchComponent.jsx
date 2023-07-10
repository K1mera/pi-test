import React from 'react'

import styles from './SearchComponent.module.css'

export const SearchComponent = () => {
  return (
    <>
    <input
        className={ styles.searchBar }
        placeholder='Search for any country, capital, continet...'
      >
        
      </input>
      <div className={ styles.btnContainer}>
        <button className={ styles.primaryBtn }>
          search
        </button>
        <button className={ styles.secondaryBtn }>
          bring me all
        </button>
      </div>
    </>
  )
}
