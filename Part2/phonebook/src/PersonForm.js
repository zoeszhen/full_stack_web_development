import React from 'react'
export const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, saveContact }) =>
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
                    saveContact({
                        id:persons.length+2,
                        name: newName,
                        number:newNumber
                    })
                }
                setNewName("");
                setNewNumber("");
            }}>add</button>
        </div>
    </form>
