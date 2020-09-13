import React from 'react'
export const Persons = ({ persons, filter, deletePerson}) => <div>
    {
        persons && persons.filter(({ name }) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    .map(({ id, name, number }) => <div key={id}>{name}: {number} <button onClick={()=>deletePerson(id)}>delete</button></div>)
    }
</div>