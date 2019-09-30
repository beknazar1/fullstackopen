import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

const App = () => {
  const [ countries, setCountries] = useState([]) 
  const [ search, setSearch ] = useState('')
  
  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <SearchForm {...{search, setSearch}}/>
      <SearchResults {...{countries, search, setSearch}}/>
    </div>
  )
}

export default App