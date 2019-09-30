import React from 'react'
import CountryView from './CountryView'

const SearchResults = ({ countries, search, setSearch }) => {
  if (search === '') return (null)
  const filtered = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
  
  if (filtered.length > 10) {
    return (<div>Too many matches, keep typing</div>)
  } else if (filtered.length > 1) {
    return (filtered.map(country =>
      <div key={country.name}>{country.name} <button onClick={() => setSearch(country.name)}>Show</button></div>
    ))
  } else if (filtered.length === 1) {
    return (
      <CountryView result={filtered[0]} />
    )
  } else {
    return (null)
  }
}

export default SearchResults