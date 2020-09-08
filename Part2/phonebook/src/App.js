import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231245' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
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
          persons.map(({ name }) => <div>{name}</div>)
        }
      </div>
    </div >
  )

}

export default App