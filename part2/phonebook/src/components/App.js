import React, { useState, useEffect } from 'react'
import personService from '../services/persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Persons from './Persons'
import Notification from './Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ filter, setFilter ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)

  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setNotification('Content retrieved succesfully')
        setTimeout(() => setNotification(null), 3000)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification {...{notification, errorMessage}} />
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>add a new person</h2>
      <PersonForm {...{persons, setPersons, setNotification, setErrorMessage}}/>
      <h2>Numbers</h2>
      <Persons {...{persons, setPersons, filter, setNotification}}/>
    </div>
  )
}

export default App