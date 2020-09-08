import React from 'react'
export const Persons = ({ persons, filter }) => <div>
    {
        persons && persons.filter(({ name }) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
            .map(({ name }) => <div key={name}>{name}</div>)
    }
</div>