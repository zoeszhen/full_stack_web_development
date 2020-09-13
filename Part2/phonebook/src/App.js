import React, { useState, useEffect } from 'react'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'
import { get, save, remove, update } from "./service"
import { Notification } from "./Notification"

const messagePositive = {
  color: 'green',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const messageNegative = {
  color: 'red',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState({ message: "", style: messagePositive })

  useEffect(() => {
    const fetchPersons = async () => {
      const contact = await get();
      setPersons(contact)
    };
    fetchPersons();
  }, [])

  const saveContact = (contact) => {
    const samePerson = persons.filter(({ name }) => contact.name === name);
    if (samePerson.length > 0) {
      if (window.confirm("Do you really want to replace the contact?")) {
        update({
          id: samePerson[0].id,
          name: samePerson[0].name,
          number: contact.number
        })
          .then((newContact) => {
            setPersons(persons.map((person) => person.name === newContact.name ? newContact : person))
            setMessage({
              message: `success update ${newContact.name}`,
              style: messagePositive
            })
          })
          .catch((error) => {
            setMessage({
              message: `error: ${error.message}`,
              style: messageNegative
            })
          })
      }
    } else {
      save(contact)
        .then((contact) => {
          setPersons((prevState) => [...prevState, contact])
          setMessage({
            message: `success save ${contact.name}`,
            style: messagePositive
          })
        })
        .catch((error) => {
          setMessage({
            message: `error: ${error.message}`,
            style: messageNegative
          })
        })
    }
    setTimeout(() => {
      setMessage({
        message: "",
        style: messagePositive
      })
    }, 5000)
  }

  const deletePerson = (personId) => {
    if (window.confirm("Do you really want to delete the contact?")) {
      remove(personId)
        .then(() => {
          setPersons(persons.filter(({ id }) => id !== personId))
        })
        .catch((error) => {
          setMessage({
            message: `error: ${error.message}`,
            style: messageNegative
          })
        })
    }

    setTimeout(() => {
      setMessage({
        message: "",
        style: messageNegative
      })
    }, 5000)

  }

  return (
    <div>
      <Notification message={message.message} messageStyle={message.style}></Notification>
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