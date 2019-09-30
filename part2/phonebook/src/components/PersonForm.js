import React, { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons, setNotification, setErrorMessage }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    const personsFiltered = persons.filter(person => person.name === newName)
    const newPerson = {name: newName, number: newNumber}
    
    if (personsFiltered.length > 0) {
      
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
        const idToBeUpdated = personsFiltered[0].id;
        personService
          .update(idToBeUpdated, newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== idToBeUpdated ? person : updatedPerson))
            setNotification(`Updated ${updatedPerson.name} succesfully`)
            setTimeout(() => setNotification(null), 3000)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setErrorMessage(`Information of ${newName} has already been deleted from server`)
            setTimeout(() => setErrorMessage(null), 3000)
            setPersons(persons.filter(person => person.id !== idToBeUpdated))
            setNewName('')
            setNewNumber('')
          })
      
       }

    } else {
      personService
        .create(newPerson)
        .then (returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNotification(`Added ${returnedPerson.name} succesfully`)
          setTimeout(() => setNotification(null), 3000)
          setNewName('')
          setNewNumber('')
        })
    }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  return (
    <form onSubmit={addPerson}>
      <div>name: <input value={newName} onChange={handleNameChange} /></div>
      <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

export default PersonForm