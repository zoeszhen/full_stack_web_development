import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  return (
    <div>
      <h2>PhoneBook</h2>
      <div>
        filter shown with <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={(e) => {
            e.preventDefault()
            if (persons.map(({ name }) => name).includes(newName)) {
              window.alert(`${newName} is already added to phonebook`)
            } else {
              setPersons((prevState) => [...prevState, { name: newName, number: newNumber }])
            }
            setNewName("")
          }}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons
            .filter(({ name }) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
            .map(({ name }) => <div>{name}</div>)
        }
      </div>
    </div >
  )

}

export default App