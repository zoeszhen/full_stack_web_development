import React from 'react'
export const Persons = ({ persons, filter }) => <div>
    {
        persons && persons.filter(({ name }) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    .map(({ id, name, number }) => <div key={id}>{name}: {number}</div>)
    }
</div>