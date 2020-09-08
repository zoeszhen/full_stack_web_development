import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <h2>add a new</h2>
      <PersonForm newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}>
        persons={persons}
        setPersons={setPersons}
      </PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}></Persons>
    </div >
  )

}

export default App