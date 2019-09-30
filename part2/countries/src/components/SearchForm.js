import React from 'react'

const SearchForm = ({search, setSearch}) => {
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <form>find countries <input value={search} onChange={handleChange}/></form>
  )
}

export default SearchForm