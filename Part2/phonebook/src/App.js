upimport React, { useState, useEffect } from 'react'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'
import { get, save, remove, update } from "./service"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchPersons = async () => {
      const contact = await get();
      setPersons(contact)
    };

    fetchPersons();
  }, [])

  const saveContact = async (contact) => {
    const samePerson = persons.filter(({ name }) => contact.name === name);
    if (samePerson.length > 0) {
      if (window.confirm("Do you really want to replace the contact?")) {
        const newContact = await update({
          id: samePerson[0].id,
          name: samePerson[0].name,
          number: contact.number
        });
        setPersons(persons.map((person) => person.name === newContact.name ? newContact : person))
      }
    } else {
      const newContact = await save(contact);
      setPersons((prevState) => [...prevState, contact])
    }
  }

  const deletePerson = async (personId) => {
    if (window.confirm("Do you really want to delete the contact?")) {
      await remove(personId)
      setPersons(persons.filter(({ id }) => id !== personId))
    }

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
      <Persons persons={persons} filter={filter} deletePerson={deletePerson}></Persons>
    </div >
  )

}

export default App