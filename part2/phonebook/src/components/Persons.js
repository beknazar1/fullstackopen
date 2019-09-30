import React from 'react'
import personService from '../services/persons'

const Persons = ({persons,  filter, setPersons, setNotification}) => {
  const filtered = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
  const handleDelete = (id, name) => {
    if(window.confirm(`Delete ${name}?`)) {
      personService
        .erase(id)
        .then(id => {
          setPersons(persons.filter(p => p.id !== id))
          setNotification(`Deleted ${name} succesfully`)
          setTimeout(() => setNotification(null), 3000)
        })
    }
  }
  
  return (filtered.map(person =>
    <div key={person.id}>{person.name} {person.number}<button onClick={() => handleDelete(person.id, person.name)}>Delete</button></div>
  ))
}

export default Persons