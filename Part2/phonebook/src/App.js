import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'
import {getContact, savePerson} from "./service";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchPersons = async () => {
      const contact = await getContact();
      setPersons(contact)
    };

    fetchPersons();
  }, [])

  const saveContact= async (contact) => {
    const newContact = await savePerson(contact);
    setPersons((prevState) => [...prevState, contact])
  }

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <h2>add a new</h2>
      <PersonForm newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        saveContact={saveContact}>
      </PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}></Persons>
    </div >
  )

}

export default App